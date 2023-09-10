import { isServer, createComponent, spread, escape, delegateEvents, ssrElement, mergeProps as mergeProps$1, ssr, ssrHydrationKey, useAssets, ssrAttribute, HydrationScript, NoHydration, ssrStyle, Dynamic, Portal, renderToStringAsync } from 'solid-js/web';
import { createContext, sharedConfig, createUniqueId, useContext, createRenderEffect, onCleanup, createSignal, getOwner, runWithOwner, createMemo, untrack, createComponent as createComponent$1, on, startTransition, resetErrorBoundaries, mergeProps, splitProps, children, createRoot, Show, ErrorBoundary as ErrorBoundary$1, createEffect, Suspense } from 'solid-js';

const MetaContext = createContext();
const cascadingTags = ["title", "meta"];
const getTagType = tag => tag.tag + (tag.name ? `.${tag.name}"` : "");
const MetaProvider = props => {
  if (!isServer && !sharedConfig.context) {
    const ssrTags = document.head.querySelectorAll(`[data-sm]`);
    // `forEach` on `NodeList` is not supported in Googlebot, so use a workaround
    Array.prototype.forEach.call(ssrTags, ssrTag => ssrTag.parentNode.removeChild(ssrTag));
  }
  const cascadedTagInstances = new Map();
  // TODO: use one element for all tags of the same type, just swap out
  // where the props get applied
  function getElement(tag) {
    if (tag.ref) {
      return tag.ref;
    }
    let el = document.querySelector(`[data-sm="${tag.id}"]`);
    if (el) {
      if (el.tagName.toLowerCase() !== tag.tag) {
        if (el.parentNode) {
          // remove the old tag
          el.parentNode.removeChild(el);
        }
        // add the new tag
        el = document.createElement(tag.tag);
      }
      // use the old tag
      el.removeAttribute("data-sm");
    } else {
      // create a new tag
      el = document.createElement(tag.tag);
    }
    return el;
  }
  const actions = {
    addClientTag: tag => {
      let tagType = getTagType(tag);
      if (cascadingTags.indexOf(tag.tag) !== -1) {
        //  only cascading tags need to be kept as singletons
        if (!cascadedTagInstances.has(tagType)) {
          cascadedTagInstances.set(tagType, []);
        }
        let instances = cascadedTagInstances.get(tagType);
        let index = instances.length;
        instances = [...instances, tag];
        // track indices synchronously
        cascadedTagInstances.set(tagType, instances);
        if (!isServer) {
          let element = getElement(tag);
          tag.ref = element;
          spread(element, tag.props);
          let lastVisited = null;
          for (var i = index - 1; i >= 0; i--) {
            if (instances[i] != null) {
              lastVisited = instances[i];
              break;
            }
          }
          if (element.parentNode != document.head) {
            document.head.appendChild(element);
          }
          if (lastVisited && lastVisited.ref) {
            document.head.removeChild(lastVisited.ref);
          }
        }
        return index;
      }
      if (!isServer) {
        let element = getElement(tag);
        tag.ref = element;
        spread(element, tag.props);
        if (element.parentNode != document.head) {
          document.head.appendChild(element);
        }
      }
      return -1;
    },
    removeClientTag: (tag, index) => {
      const tagName = getTagType(tag);
      if (tag.ref) {
        const t = cascadedTagInstances.get(tagName);
        if (t) {
          if (tag.ref.parentNode) {
            tag.ref.parentNode.removeChild(tag.ref);
            for (let i = index - 1; i >= 0; i--) {
              if (t[i] != null) {
                document.head.appendChild(t[i].ref);
              }
            }
          }
          t[index] = null;
          cascadedTagInstances.set(tagName, t);
        } else {
          if (tag.ref.parentNode) {
            tag.ref.parentNode.removeChild(tag.ref);
          }
        }
      }
    }
  };
  if (isServer) {
    actions.addServerTag = tagDesc => {
      const {
        tags = []
      } = props;
      // tweak only cascading tags
      if (cascadingTags.indexOf(tagDesc.tag) !== -1) {
        const index = tags.findIndex(prev => {
          const prevName = prev.props.name || prev.props.property;
          const nextName = tagDesc.props.name || tagDesc.props.property;
          return prev.tag === tagDesc.tag && prevName === nextName;
        });
        if (index !== -1) {
          tags.splice(index, 1);
        }
      }
      tags.push(tagDesc);
    };
    if (Array.isArray(props.tags) === false) {
      throw Error("tags array should be passed to <MetaProvider /> in node");
    }
  }
  return createComponent(MetaContext.Provider, {
    value: actions,
    get children() {
      return props.children;
    }
  });
};
const MetaTag = (tag, props, setting) => {
  const id = createUniqueId();
  const c = useContext(MetaContext);
  if (!c) throw new Error("<MetaProvider /> should be in the tree");
  useHead({
    tag,
    props,
    setting,
    id,
    get name() {
      return props.name || props.property;
    }
  });
  return null;
};
function useHead(tagDesc) {
  const {
    addClientTag,
    removeClientTag,
    addServerTag
  } = useContext(MetaContext);
  createRenderEffect(() => {
    if (!isServer) {
      let index = addClientTag(tagDesc);
      onCleanup(() => removeClientTag(tagDesc, index));
    }
  });
  if (isServer) {
    addServerTag(tagDesc);
    return null;
  }
}
function renderTags(tags) {
  return tags.map(tag => {
    const keys = Object.keys(tag.props);
    const props = keys.map(k => k === "children" ? "" : ` ${k}="${
    // @ts-expect-error
    escape(tag.props[k], true)}"`).join("");
    const children = tag.props.children;
    if (tag.setting?.close) {
      return `<${tag.tag} data-sm="${tag.id}"${props}>${
      // @ts-expect-error
      tag.setting?.escape ? escape(children) : children || ""}</${tag.tag}>`;
    }
    return `<${tag.tag} data-sm="${tag.id}"${props}/>`;
  }).join("");
}
const Title = props => MetaTag("title", props, {
  escape: true,
  close: true
});
const Meta$1 = props => MetaTag("meta", props);

function bindEvent(target, type, handler) {
    target.addEventListener(type, handler);
    return () => target.removeEventListener(type, handler);
}
function intercept([value, setValue], get, set) {
    return [get ? () => get(value()) : value, set ? (v) => setValue(set(v)) : setValue];
}
function querySelector(selector) {
    // Guard against selector being an invalid CSS selector
    try {
        return document.querySelector(selector);
    }
    catch (e) {
        return null;
    }
}
function scrollToHash(hash, fallbackTop) {
    const el = querySelector(`#${hash}`);
    if (el) {
        el.scrollIntoView();
    }
    else if (fallbackTop) {
        window.scrollTo(0, 0);
    }
}
function createIntegration(get, set, init, utils) {
    let ignore = false;
    const wrap = (value) => (typeof value === "string" ? { value } : value);
    const signal = intercept(createSignal(wrap(get()), { equals: (a, b) => a.value === b.value }), undefined, next => {
        !ignore && set(next);
        return next;
    });
    init &&
        onCleanup(init((value = get()) => {
            ignore = true;
            signal[1](wrap(value));
            ignore = false;
        }));
    return {
        signal,
        utils
    };
}
function normalizeIntegration(integration) {
    if (!integration) {
        return {
            signal: createSignal({ value: "" })
        };
    }
    else if (Array.isArray(integration)) {
        return {
            signal: integration
        };
    }
    return integration;
}
function staticIntegration(obj) {
    return {
        signal: [() => obj, next => Object.assign(obj, next)]
    };
}
function pathIntegration() {
    return createIntegration(() => ({
        value: window.location.pathname + window.location.search + window.location.hash,
        state: history.state
    }), ({ value, replace, scroll, state }) => {
        if (replace) {
            window.history.replaceState(state, "", value);
        }
        else {
            window.history.pushState(state, "", value);
        }
        scrollToHash(window.location.hash.slice(1), scroll);
    }, notify => bindEvent(window, "popstate", () => notify()), {
        go: delta => window.history.go(delta)
    });
}

function createBeforeLeave() {
    let listeners = new Set();
    function subscribe(listener) {
        listeners.add(listener);
        return () => listeners.delete(listener);
    }
    let ignore = false;
    function confirm(to, options) {
        if (ignore)
            return !(ignore = false);
        const e = {
            to,
            options,
            defaultPrevented: false,
            preventDefault: () => (e.defaultPrevented = true)
        };
        for (const l of listeners)
            l.listener({
                ...e,
                from: l.location,
                retry: (force) => {
                    force && (ignore = true);
                    l.navigate(to, options);
                }
            });
        return !e.defaultPrevented;
    }
    return {
        subscribe,
        confirm
    };
}

const hasSchemeRegex = /^(?:[a-z0-9]+:)?\/\//i;
const trimPathRegex = /^\/+|(\/)\/+$/g;
function normalizePath(path, omitSlash = false) {
    const s = path.replace(trimPathRegex, "$1");
    return s ? (omitSlash || /^[?#]/.test(s) ? s : "/" + s) : "";
}
function resolvePath(base, path, from) {
    if (hasSchemeRegex.test(path)) {
        return undefined;
    }
    const basePath = normalizePath(base);
    const fromPath = from && normalizePath(from);
    let result = "";
    if (!fromPath || path.startsWith("/")) {
        result = basePath;
    }
    else if (fromPath.toLowerCase().indexOf(basePath.toLowerCase()) !== 0) {
        result = basePath + fromPath;
    }
    else {
        result = fromPath;
    }
    return (result || "/") + normalizePath(path, !result);
}
function invariant(value, message) {
    if (value == null) {
        throw new Error(message);
    }
    return value;
}
function joinPaths(from, to) {
    return normalizePath(from).replace(/\/*(\*.*)?$/g, "") + normalizePath(to);
}
function extractSearchParams(url) {
    const params = {};
    url.searchParams.forEach((value, key) => {
        params[key] = value;
    });
    return params;
}
function createMatcher(path, partial, matchFilters) {
    const [pattern, splat] = path.split("/*", 2);
    const segments = pattern.split("/").filter(Boolean);
    const len = segments.length;
    return (location) => {
        const locSegments = location.split("/").filter(Boolean);
        const lenDiff = locSegments.length - len;
        if (lenDiff < 0 || (lenDiff > 0 && splat === undefined && !partial)) {
            return null;
        }
        const match = {
            path: len ? "" : "/",
            params: {}
        };
        const matchFilter = (s) => matchFilters === undefined ? undefined : matchFilters[s];
        for (let i = 0; i < len; i++) {
            const segment = segments[i];
            const locSegment = locSegments[i];
            const dynamic = segment[0] === ":";
            const key = dynamic ? segment.slice(1) : segment;
            if (dynamic && matchSegment(locSegment, matchFilter(key))) {
                match.params[key] = locSegment;
            }
            else if (dynamic || !matchSegment(locSegment, segment)) {
                return null;
            }
            match.path += `/${locSegment}`;
        }
        if (splat) {
            const remainder = lenDiff ? locSegments.slice(-lenDiff).join("/") : "";
            if (matchSegment(remainder, matchFilter(splat))) {
                match.params[splat] = remainder;
            }
            else {
                return null;
            }
        }
        return match;
    };
}
function matchSegment(input, filter) {
    const isEqual = (s) => s.localeCompare(input, undefined, { sensitivity: "base" }) === 0;
    if (filter === undefined) {
        return true;
    }
    else if (typeof filter === "string") {
        return isEqual(filter);
    }
    else if (typeof filter === "function") {
        return filter(input);
    }
    else if (Array.isArray(filter)) {
        return filter.some(isEqual);
    }
    else if (filter instanceof RegExp) {
        return filter.test(input);
    }
    return false;
}
function scoreRoute(route) {
    const [pattern, splat] = route.pattern.split("/*", 2);
    const segments = pattern.split("/").filter(Boolean);
    return segments.reduce((score, segment) => score + (segment.startsWith(":") ? 2 : 3), segments.length - (splat === undefined ? 0 : 1));
}
function createMemoObject(fn) {
    const map = new Map();
    const owner = getOwner();
    return new Proxy({}, {
        get(_, property) {
            if (!map.has(property)) {
                runWithOwner(owner, () => map.set(property, createMemo(() => fn()[property])));
            }
            return map.get(property)();
        },
        getOwnPropertyDescriptor() {
            return {
                enumerable: true,
                configurable: true
            };
        },
        ownKeys() {
            return Reflect.ownKeys(fn());
        }
    });
}
function expandOptionals$1(pattern) {
    let match = /(\/?\:[^\/]+)\?/.exec(pattern);
    if (!match)
        return [pattern];
    let prefix = pattern.slice(0, match.index);
    let suffix = pattern.slice(match.index + match[0].length);
    const prefixes = [prefix, (prefix += match[1])];
    // This section handles adjacent optional params. We don't actually want all permuations since
    // that will lead to equivalent routes which have the same number of params. For example
    // `/:a?/:b?/:c`? only has the unique expansion: `/`, `/:a`, `/:a/:b`, `/:a/:b/:c` and we can
    // discard `/:b`, `/:c`, `/:b/:c` by building them up in order and not recursing. This also helps
    // ensure predictability where earlier params have precidence.
    while ((match = /^(\/\:[^\/]+)\?/.exec(suffix))) {
        prefixes.push((prefix += match[1]));
        suffix = suffix.slice(match[0].length);
    }
    return expandOptionals$1(suffix).reduce((results, expansion) => [...results, ...prefixes.map(p => p + expansion)], []);
}

const MAX_REDIRECTS = 100;
const RouterContextObj = createContext();
const RouteContextObj = createContext();
const useRouter = () => invariant(useContext(RouterContextObj), "Make sure your app is wrapped in a <Router />");
let TempRoute;
const useRoute = () => TempRoute || useContext(RouteContextObj) || useRouter().base;
const useResolvedPath = (path) => {
    const route = useRoute();
    return createMemo(() => route.resolvePath(path()));
};
const useHref = (to) => {
    const router = useRouter();
    return createMemo(() => {
        const to_ = to();
        return to_ !== undefined ? router.renderPath(to_) : to_;
    });
};
const useLocation = () => useRouter().location;
function createRoutes(routeDef, base = "", fallback) {
    const { component, data, children } = routeDef;
    const isLeaf = !children || (Array.isArray(children) && !children.length);
    const shared = {
        key: routeDef,
        element: component
            ? () => createComponent$1(component, {})
            : () => {
                const { element } = routeDef;
                return element === undefined && fallback
                    ? createComponent$1(fallback, {})
                    : element;
            },
        preload: routeDef.component
            ? component.preload
            : routeDef.preload,
        data
    };
    return asArray(routeDef.path).reduce((acc, path) => {
        for (const originalPath of expandOptionals$1(path)) {
            const path = joinPaths(base, originalPath);
            const pattern = isLeaf ? path : path.split("/*", 1)[0];
            acc.push({
                ...shared,
                originalPath,
                pattern,
                matcher: createMatcher(pattern, !isLeaf, routeDef.matchFilters)
            });
        }
        return acc;
    }, []);
}
function createBranch(routes, index = 0) {
    return {
        routes,
        score: scoreRoute(routes[routes.length - 1]) * 10000 - index,
        matcher(location) {
            const matches = [];
            for (let i = routes.length - 1; i >= 0; i--) {
                const route = routes[i];
                const match = route.matcher(location);
                if (!match) {
                    return null;
                }
                matches.unshift({
                    ...match,
                    route
                });
            }
            return matches;
        }
    };
}
function asArray(value) {
    return Array.isArray(value) ? value : [value];
}
function createBranches(routeDef, base = "", fallback, stack = [], branches = []) {
    const routeDefs = asArray(routeDef);
    for (let i = 0, len = routeDefs.length; i < len; i++) {
        const def = routeDefs[i];
        if (def && typeof def === "object" && def.hasOwnProperty("path")) {
            const routes = createRoutes(def, base, fallback);
            for (const route of routes) {
                stack.push(route);
                const isEmptyArray = Array.isArray(def.children) && def.children.length === 0;
                if (def.children && !isEmptyArray) {
                    createBranches(def.children, route.pattern, fallback, stack, branches);
                }
                else {
                    const branch = createBranch([...stack], branches.length);
                    branches.push(branch);
                }
                stack.pop();
            }
        }
    }
    // Stack will be empty on final return
    return stack.length ? branches : branches.sort((a, b) => b.score - a.score);
}
function getRouteMatches$1(branches, location) {
    for (let i = 0, len = branches.length; i < len; i++) {
        const match = branches[i].matcher(location);
        if (match) {
            return match;
        }
    }
    return [];
}
function createLocation(path, state) {
    const origin = new URL("http://sar");
    const url = createMemo(prev => {
        const path_ = path();
        try {
            return new URL(path_, origin);
        }
        catch (err) {
            console.error(`Invalid path ${path_}`);
            return prev;
        }
    }, origin, {
        equals: (a, b) => a.href === b.href
    });
    const pathname = createMemo(() => url().pathname);
    const search = createMemo(() => url().search, true);
    const hash = createMemo(() => url().hash);
    const key = createMemo(() => "");
    return {
        get pathname() {
            return pathname();
        },
        get search() {
            return search();
        },
        get hash() {
            return hash();
        },
        get state() {
            return state();
        },
        get key() {
            return key();
        },
        query: createMemoObject(on(search, () => extractSearchParams(url())))
    };
}
function createRouterContext(integration, base = "", data, out) {
    const { signal: [source, setSource], utils = {} } = normalizeIntegration(integration);
    const parsePath = utils.parsePath || (p => p);
    const renderPath = utils.renderPath || (p => p);
    const beforeLeave = utils.beforeLeave || createBeforeLeave();
    const basePath = resolvePath("", base);
    const output = isServer && out
        ? Object.assign(out, {
            matches: [],
            url: undefined
        })
        : undefined;
    if (basePath === undefined) {
        throw new Error(`${basePath} is not a valid base path`);
    }
    else if (basePath && !source().value) {
        setSource({ value: basePath, replace: true, scroll: false });
    }
    const [isRouting, setIsRouting] = createSignal(false);
    const start = async (callback) => {
        setIsRouting(true);
        try {
            await startTransition(callback);
        }
        finally {
            setIsRouting(false);
        }
    };
    const [reference, setReference] = createSignal(source().value);
    const [state, setState] = createSignal(source().state);
    const location = createLocation(reference, state);
    const referrers = [];
    const baseRoute = {
        pattern: basePath,
        params: {},
        path: () => basePath,
        outlet: () => null,
        resolvePath(to) {
            return resolvePath(basePath, to);
        }
    };
    if (data) {
        try {
            TempRoute = baseRoute;
            baseRoute.data = data({
                data: undefined,
                params: {},
                location,
                navigate: navigatorFactory(baseRoute)
            });
        }
        finally {
            TempRoute = undefined;
        }
    }
    function navigateFromRoute(route, to, options) {
        // Untrack in case someone navigates in an effect - don't want to track `reference` or route paths
        untrack(() => {
            if (typeof to === "number") {
                if (!to) ;
                else if (utils.go) {
                    beforeLeave.confirm(to, options) && utils.go(to);
                }
                else {
                    console.warn("Router integration does not support relative routing");
                }
                return;
            }
            const { replace, resolve, scroll, state: nextState } = {
                replace: false,
                resolve: true,
                scroll: true,
                ...options
            };
            const resolvedTo = resolve ? route.resolvePath(to) : resolvePath("", to);
            if (resolvedTo === undefined) {
                throw new Error(`Path '${to}' is not a routable path`);
            }
            else if (referrers.length >= MAX_REDIRECTS) {
                throw new Error("Too many redirects");
            }
            const current = reference();
            if (resolvedTo !== current || nextState !== state()) {
                if (isServer) {
                    if (output) {
                        output.url = resolvedTo;
                    }
                    setSource({ value: resolvedTo, replace, scroll, state: nextState });
                }
                else if (beforeLeave.confirm(resolvedTo, options)) {
                    const len = referrers.push({ value: current, replace, scroll, state: state() });
                    start(() => {
                        setReference(resolvedTo);
                        setState(nextState);
                        resetErrorBoundaries();
                    }).then(() => {
                        if (referrers.length === len) {
                            navigateEnd({
                                value: resolvedTo,
                                state: nextState
                            });
                        }
                    });
                }
            }
        });
    }
    function navigatorFactory(route) {
        // Workaround for vite issue (https://github.com/vitejs/vite/issues/3803)
        route = route || useContext(RouteContextObj) || baseRoute;
        return (to, options) => navigateFromRoute(route, to, options);
    }
    function navigateEnd(next) {
        const first = referrers[0];
        if (first) {
            if (next.value !== first.value || next.state !== first.state) {
                setSource({
                    ...next,
                    replace: first.replace,
                    scroll: first.scroll
                });
            }
            referrers.length = 0;
        }
    }
    createRenderEffect(() => {
        const { value, state } = source();
        // Untrack this whole block so `start` doesn't cause Solid's Listener to be preserved
        untrack(() => {
            if (value !== reference()) {
                start(() => {
                    setReference(value);
                    setState(state);
                });
            }
        });
    });
    if (!isServer) {
        function handleAnchorClick(evt) {
            if (evt.defaultPrevented ||
                evt.button !== 0 ||
                evt.metaKey ||
                evt.altKey ||
                evt.ctrlKey ||
                evt.shiftKey)
                return;
            const a = evt
                .composedPath()
                .find(el => el instanceof Node && el.nodeName.toUpperCase() === "A");
            if (!a || !a.hasAttribute("link"))
                return;
            const href = a.href;
            if (a.target || (!href && !a.hasAttribute("state")))
                return;
            const rel = (a.getAttribute("rel") || "").split(/\s+/);
            if (a.hasAttribute("download") || (rel && rel.includes("external")))
                return;
            const url = new URL(href);
            if (url.origin !== window.location.origin ||
                (basePath && url.pathname && !url.pathname.toLowerCase().startsWith(basePath.toLowerCase())))
                return;
            const to = parsePath(url.pathname + url.search + url.hash);
            const state = a.getAttribute("state");
            evt.preventDefault();
            navigateFromRoute(baseRoute, to, {
                resolve: false,
                replace: a.hasAttribute("replace"),
                scroll: !a.hasAttribute("noscroll"),
                state: state && JSON.parse(state)
            });
        }
        // ensure delegated events run first
        delegateEvents(["click"]);
        document.addEventListener("click", handleAnchorClick);
        onCleanup(() => document.removeEventListener("click", handleAnchorClick));
    }
    return {
        base: baseRoute,
        out: output,
        location,
        isRouting,
        renderPath,
        parsePath,
        navigatorFactory,
        beforeLeave
    };
}
function createRouteContext(router, parent, child, match, params) {
    const { base, location, navigatorFactory } = router;
    const { pattern, element: outlet, preload, data } = match().route;
    const path = createMemo(() => match().path);
    preload && preload();
    const route = {
        parent,
        pattern,
        get child() {
            return child();
        },
        path,
        params,
        data: parent.data,
        outlet,
        resolvePath(to) {
            return resolvePath(base.path(), to, path());
        }
    };
    if (data) {
        try {
            TempRoute = route;
            route.data = data({ data: parent.data, params, location, navigate: navigatorFactory(route) });
        }
        finally {
            TempRoute = undefined;
        }
    }
    return route;
}

const Router = props => {
  const {
    source,
    url,
    base,
    data,
    out
  } = props;
  const integration = source || (isServer ? staticIntegration({
    value: url || ""
  }) : pathIntegration());
  const routerState = createRouterContext(integration, base, data, out);
  return createComponent(RouterContextObj.Provider, {
    value: routerState,
    get children() {
      return props.children;
    }
  });
};
const Routes$1 = props => {
  const router = useRouter();
  const parentRoute = useRoute();
  const routeDefs = children(() => props.children);
  const branches = createMemo(() => createBranches(routeDefs(), joinPaths(parentRoute.pattern, props.base || ""), Outlet));
  const matches = createMemo(() => getRouteMatches$1(branches(), router.location.pathname));
  const params = createMemoObject(() => {
    const m = matches();
    const params = {};
    for (let i = 0; i < m.length; i++) {
      Object.assign(params, m[i].params);
    }
    return params;
  });
  if (router.out) {
    router.out.matches.push(matches().map(({
      route,
      path,
      params
    }) => ({
      originalPath: route.originalPath,
      pattern: route.pattern,
      path,
      params
    })));
  }
  const disposers = [];
  let root;
  const routeStates = createMemo(on(matches, (nextMatches, prevMatches, prev) => {
    let equal = prevMatches && nextMatches.length === prevMatches.length;
    const next = [];
    for (let i = 0, len = nextMatches.length; i < len; i++) {
      const prevMatch = prevMatches && prevMatches[i];
      const nextMatch = nextMatches[i];
      if (prev && prevMatch && nextMatch.route.key === prevMatch.route.key) {
        next[i] = prev[i];
      } else {
        equal = false;
        if (disposers[i]) {
          disposers[i]();
        }
        createRoot(dispose => {
          disposers[i] = dispose;
          next[i] = createRouteContext(router, next[i - 1] || parentRoute, () => routeStates()[i + 1], () => matches()[i], params);
        });
      }
    }
    disposers.splice(nextMatches.length).forEach(dispose => dispose());
    if (prev && equal) {
      return prev;
    }
    root = next[0];
    return next;
  }));
  return createComponent(Show, {
    get when() {
      return routeStates() && root;
    },
    keyed: true,
    children: route => createComponent(RouteContextObj.Provider, {
      value: route,
      get children() {
        return route.outlet();
      }
    })
  });
};
const Outlet = () => {
  const route = useRoute();
  return createComponent(Show, {
    get when() {
      return route.child;
    },
    keyed: true,
    children: child => createComponent(RouteContextObj.Provider, {
      value: child,
      get children() {
        return child.outlet();
      }
    })
  });
};
function A$1(props) {
  props = mergeProps({
    inactiveClass: "inactive",
    activeClass: "active"
  }, props);
  const [, rest] = splitProps(props, ["href", "state", "class", "activeClass", "inactiveClass", "end"]);
  const to = useResolvedPath(() => props.href);
  const href = useHref(to);
  const location = useLocation();
  const isActive = createMemo(() => {
    const to_ = to();
    if (to_ === undefined) return false;
    const path = normalizePath(to_.split(/[?#]/, 1)[0]).toLowerCase();
    const loc = normalizePath(location.pathname).toLowerCase();
    return props.end ? path === loc : loc.startsWith(path);
  });
  return ssrElement("a", mergeProps$1({
    link: true
  }, rest, {
    get href() {
      return href() || props.href;
    },
    get state() {
      return JSON.stringify(props.state);
    },
    get classList() {
      return {
        ...(props.class && {
          [props.class]: true
        }),
        [props.inactiveClass]: !isActive(),
        [props.activeClass]: isActive(),
        ...rest.classList
      };
    },
    get ["aria-current"]() {
      return isActive() ? "page" : undefined;
    }
  }), undefined, true);
}

// @ts-expect-error
const routeLayouts = {
  "/*404": {
    "id": "/*404",
    "layouts": []
  },
  "/appbar": {
    "id": "/appbar",
    "layouts": []
  },
  "/button": {
    "id": "/button",
    "layouts": []
  },
  "/checkbox": {
    "id": "/checkbox",
    "layouts": []
  },
  "/column": {
    "id": "/column",
    "layouts": []
  },
  "/dialog": {
    "id": "/dialog",
    "layouts": []
  },
  "/fab": {
    "id": "/fab",
    "layouts": []
  },
  "/headings": {
    "id": "/headings",
    "layouts": []
  },
  "/": {
    "id": "/",
    "layouts": []
  },
  "/paragraph": {
    "id": "/paragraph",
    "layouts": []
  },
  "/radio": {
    "id": "/radio",
    "layouts": []
  },
  "/row": {
    "id": "/row",
    "layouts": []
  },
  "/spinner": {
    "id": "/spinner",
    "layouts": []
  }
};
var layouts = routeLayouts;

function flattenIslands(match, manifest, islands) {
  let result = [...match];
  match.forEach(m => {
    if (m.type !== "island") return;
    const islandManifest = manifest[m.href];
    if (islandManifest) {
      //&& (!islands || islands.has(m.href))
      const res = flattenIslands(islandManifest.assets, manifest);
      result.push(...res);
    }
  });
  return result;
}
function getAssetsFromManifest(event, matches) {
  let match = matches.reduce((memo, m) => {
    if (m.length) {
      const fullPath = m.reduce((previous, match) => previous + match.originalPath, "");
      const route = layouts[fullPath];
      if (route) {
        memo.push(...(event.env.manifest?.[route.id]?.assets || []));
        const layoutsManifestEntries = route.layouts.flatMap(manifestKey => event.env.manifest?.[manifestKey]?.assets || []);
        memo.push(...layoutsManifestEntries);
      }
    }
    return memo;
  }, []);
  match.push(...(event.env.manifest?.["entry-client"]?.assets || []));
  match = flattenIslands(match, event.env.manifest, event.$islands);
  return match;
}

const FETCH_EVENT = "$FETCH";

const ServerContext = /*#__PURE__*/createContext({
  $type: FETCH_EVENT
});
const useRequest = () => {
  return useContext(ServerContext);
};

const A = A$1;
const Routes = Routes$1;

const XSolidStartLocationHeader = "x-solidstart-location";
const LocationHeader = "Location";
const ContentTypeHeader = "content-type";
const XSolidStartResponseTypeHeader = "x-solidstart-response-type";
const XSolidStartContentTypeHeader = "x-solidstart-content-type";
const XSolidStartOrigin = "x-solidstart-origin";
const JSONResponseType = "application/json";
function redirect(url, init = 302) {
  let responseInit = init;
  if (typeof responseInit === "number") {
    responseInit = { status: responseInit };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }
  if (url === "") {
    url = "/";
  }
  let headers = new Headers(responseInit.headers);
  headers.set(LocationHeader, url);
  const response = new Response(null, {
    ...responseInit,
    headers
  });
  return response;
}
const redirectStatusCodes = /* @__PURE__ */ new Set([204, 301, 302, 303, 307, 308]);
function isRedirectResponse(response) {
  return response && response instanceof Response && redirectStatusCodes.has(response.status);
}

class ServerError extends Error {
  constructor(message, {
    status,
    stack
  } = {}) {
    super(message);
    this.name = "ServerError";
    this.status = status || 400;
    if (stack) {
      this.stack = stack;
    }
  }
}
class FormError extends ServerError {
  constructor(message, {
    fieldErrors = {},
    form,
    fields,
    stack
  } = {}) {
    super(message, {
      stack
    });
    this.formError = message;
    this.name = "FormError";
    this.fields = fields || Object.fromEntries(typeof form !== "undefined" ? form.entries() : []) || {};
    this.fieldErrors = fieldErrors;
  }
}

const _tmpl$$8 = ["<div", " style=\"", "\"><div style=\"", "\"><p style=\"", "\" id=\"error-message\">", "</p><button id=\"reset-errors\" style=\"", "\">Clear errors and retry</button><pre style=\"", "\">", "</pre></div></div>"];
function ErrorBoundary(props) {
  return createComponent(ErrorBoundary$1, {
    fallback: (e, reset) => {
      return createComponent(Show, {
        get when() {
          return !props.fallback;
        },
        get fallback() {
          return props.fallback && props.fallback(e, reset);
        },
        get children() {
          return createComponent(ErrorMessage, {
            error: e
          });
        }
      });
    },
    get children() {
      return props.children;
    }
  });
}
function ErrorMessage(props) {
  createEffect(() => console.error(props.error));
  console.log(props.error);
  return ssr(_tmpl$$8, ssrHydrationKey(), "padding:" + "16px", "background-color:" + "rgba(252, 165, 165)" + (";color:" + "rgb(153, 27, 27)") + (";border-radius:" + "5px") + (";overflow:" + "scroll") + (";padding:" + "16px") + (";margin-bottom:" + "8px"), "font-weight:" + "bold", escape(props.error.message), "color:" + "rgba(252, 165, 165)" + (";background-color:" + "rgb(153, 27, 27)") + (";border-radius:" + "5px") + (";padding:" + "4px 8px"), "margin-top:" + "8px" + (";width:" + "100%"), escape(props.error.stack));
}

const _tmpl$$7 = ["<link", " rel=\"stylesheet\"", ">"],
  _tmpl$2$3 = ["<link", " rel=\"modulepreload\"", ">"];

/**
 * Links are used to load assets for the server rendered HTML
 * @returns {JSXElement}
 */
function Links() {
  const context = useRequest();
  useAssets(() => {
    let match = getAssetsFromManifest(context, context.routerContext.matches);
    const links = match.reduce((r, src) => {
      let el = src.type === "style" ? ssr(_tmpl$$7, ssrHydrationKey(), ssrAttribute("href", escape(src.href, true), false)) : src.type === "script" ? ssr(_tmpl$2$3, ssrHydrationKey(), ssrAttribute("href", escape(src.href, true), false)) : undefined;
      if (el) r[src.href] = el;
      return r;
    }, {});
    return Object.values(links);
  });
  return null;
}

function Meta() {
  const context = useContext(ServerContext);
  // @ts-expect-error The ssr() types do not match the Assets child types
  useAssets(() => ssr(renderTags(context.tags)));
  return null;
}

const _tmpl$4 = ["<script", " type=\"module\" async", "></script>"];
const isDev = "production" === "development";
const isIslands = false;
function IslandsScript() {
  return isIslands ;
}
function DevScripts() {
  return isDev ;
}
function ProdScripts() {
  const context = useRequest();
  return [createComponent(HydrationScript, {}), createComponent(NoHydration, {
    get children() {
      return [createComponent(IslandsScript, {}), isServer && (ssr(_tmpl$4, ssrHydrationKey(), ssrAttribute("src", escape(context.env.manifest?.["entry-client"].script.href, true), false)) )];
    }
  })];
}
function Scripts() {
  return [createComponent(DevScripts, {}), createComponent(ProdScripts, {})];
}

function Html(props) {
  {
    return ssrElement("html", props, undefined, false);
  }
}
function Head(props) {
  {
    return ssrElement("head", props, () => [escape(props.children), createComponent(Meta, {}), createComponent(Links, {})], false);
  }
}
function Body(props) {
  {
    return ssrElement("body", props, () => escape(props.children) , false);
  }
}

function HttpStatusCode(props) {
  const context = useRequest();
  if (isServer) {
    context.setStatusCode(props.code);
  }
  onCleanup(() => {
    if (isServer) {
      context.setStatusCode(200);
    }
  });
  return null;
}

const _tmpl$$6 = ["<main", " style=\"", "\"><!--#-->", "<!--/--><!--#-->", "<!--/--><h1 style=\"", "\">Page not found</h1><section style=\"", "\"><h2>Sorry \uD83D\uDE14, we could not find what you were looking for<br></h2><!--#-->", "<!--/--></section></main>"];
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320
};
const paragraphStyles = {
  marginBottom: 48
};
// const codeStyles = {
//     color: "#8A6534",
//     padding: 4,
//     backgroundColor: "#FFF4DB",
//     fontSize: "1.25rem",
//     borderRadius: 4,
// }

function NotFound() {
  return ssr(_tmpl$$6, ssrHydrationKey(), ssrStyle(pageStyles), escape(createComponent(Title, {
    children: "Not Found"
  })), escape(createComponent(HttpStatusCode, {
    code: 404
  })), ssrStyle(headingStyles), ssrStyle(paragraphStyles), escape(createComponent(A, {
    href: "/",
    children: "Go home"
  })));
}

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }

        break;
      }
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error(noComponentSelectorMessage);
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {

      styles += strings[i];
    }
  }


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var isBrowser$2 = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser$2 === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();

var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';

var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var IMPORT = '@import';
var KEYFRAMES = '@keyframes';
var LAYER = '@layer';

/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode;

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return assign(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? charat(characters, --position) : 0;

	if (column--, character === 10)
		column = 1, line--;

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? charat(characters, position++) : 0;

	if (column++, character === 10)
		column = 1, line++;

	return character
}

/**
 * @return {number}
 */
function peek () {
	return charat(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return substr(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = strlen(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next();
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character);
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type);
				break
			// \
			case 92:
				next();
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next();

	return slice(index, position)
}

/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = '';
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;

	while (scanning)
		switch (previous = character, character = next()) {
			// (
			case 40:
				if (previous != 108 && charat(characters, length - 1) == 58) {
					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1;
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += delimit(character);
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous);
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7);
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						append(comment(commenter(next(), caret()), root, parent), declarations);
						break
					default:
						characters += '/';
				}
				break
			// {
			case 123 * variable:
				points[index++] = strlen(characters) * ampersand;
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0;
					// ;
					case 59 + offset: if (ampersand == -1) characters = replace(characters, /\f/g, '');
						if (property > 0 && (strlen(characters) - length))
							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
						break
					// @ ;
					case 59: characters += ';';
					// { rule/at-rule
					default:
						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children);
							else
								switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children);
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
				break
			// :
			case 58:
				length = 1 + strlen(characters), property = previous;
			default:
				if (variable < 1)
					if (character == 123)
						--variable;
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
						break
					// ,
					case 44:
						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next());

						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
						break
					// -
					case 45:
						if (previous === 45 && strlen(characters) == 2)
							variable = 0;
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [''];
	var size = sizeof(rule);

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
				props[k++] = z;

	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length)
}

/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = '';
	var length = sizeof(children);

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || '';

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break
		case IMPORT: case DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case RULESET: element.value = element.props.join(',');
	}

	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = sizeof(collection);

	return function (element, index, children, callback) {
		var output = '';

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || '';

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element);
	}
}

var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = peek(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (token(character)) {
      break;
    }

    next();
  }

  return slice(begin, position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (token(character)) {
      case 0:
        // &\f
        if (character === 38 && peek() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;

      case 2:
        parsed[index] += delimit(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = peek() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += from(character);
    }
  } while (character = next());

  return parsed;
};

var getRules = function getRules(value, points) {
  return dealloc(toRules(alloc(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};

/* eslint-disable no-fallthrough */

function prefix(value, length) {
  switch (hash(value, length)) {
    // color-adjust
    case 5103:
      return WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    // order

    case 6165:
      return WEBKIT + value + MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (charat(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if (charat(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return replace(value, ':', ':' + WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
      }

      break;
    // writing-mode

    case 5936:
      switch (charat(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }

      return WEBKIT + value + MS + value + value;
  }

  return value;
}

var prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case DECLARATION:
      element["return"] = prefix(element.value, element.length);
      break;

    case KEYFRAMES:
      return serialize([copy(element, {
        value: replace(element.value, '@', '@' + WEBKIT)
      })], callback);

    case RULESET:
      if (element.length) return combine(element.props, function (value) {
        switch (match(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return serialize([copy(element, {
              props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return serialize([copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
            })], callback);
        }

        return '';
      });
  }
};

var defaultStylisPlugins = [prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if (key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  var inserted = {};
  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return serialize(compile(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

const isBrowser$1 = typeof document !== 'undefined';
let EmotionCacheContext = /* #__PURE__ */createContext(
// we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
  key: 'css'
}) : null);
EmotionCacheContext.Provider;
let withEmotionCache = function withEmotionCache(func) {
  return props => {
    // the cache will never be null in the browser
    let cache = useContext(EmotionCacheContext);
    return func(props, cache);
  };
};
if (!isBrowser$1) {
  withEmotionCache = function withEmotionCache(func) {
    return props => {
      let cache = useContext(EmotionCacheContext);
      if (cache === null) {
        // yes, we're potentially creating this on every render
        // it doesn't actually matter though since it's only on the server
        // so there will only every be a single render
        // that could change in the future because of suspense and etc. but for now,
        // this works and i don't want to optimise for a future thing that we aren't sure about
        cache = createCache({
          key: 'css'
        });
        return (// @ts-ignore
          createComponent(EmotionCacheContext.Provider, {
            value: cache,
            get children() {
              return func(props, cache);
            }
          })
        );
      } else {
        return func(props, cache);
      }
    };
  };
}

const ThemeContext = createContext(() => ({}));
function useTheme() {
  return useContext(ThemeContext)();
}
const ThemeProvider = props => {
  return createComponent(ThemeContext.Provider, {
    get value() {
      return props.theme;
    },
    get children() {
      return props.children;
    }
  });
};

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

const testOmitPropsOnStringTag = isPropValid;
const testOmitPropsOnComponent = (key) => key !== "theme";
const getDefaultShouldForwardProp = (tag) => typeof tag === "string" && // 96 is one less than the char code
// for "a" so this is checking that
// it's a lowercase character
tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
const composeShouldForwardProps = (tag, options, isReal) => {
  let shouldForwardProp;
  if (options) {
    const optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? (propName) => tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName) : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp !== "function" && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }
  return shouldForwardProp;
};

const isBrowser = typeof document !== 'undefined';
const createStyled = (tag, options) => {
  const isReal = tag.__emotion_real === tag;
  const baseTag = isReal && tag.__emotion_base || tag;
  let identifierName;
  let targetClassName;
  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  const shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  const defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  const shouldUseAs = !defaultShouldForwardProp('as');
  return function (...args) {
    let styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== undefined) {
      styles.push(`label:${identifierName};`);
    }
    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      styles.push(args[0][0]);
      let len = args.length;
      let i = 1;
      for (; i < len; i++) {
        styles.push(args[i], args[0][i]);
      }
    }
    const Styled = withEmotionCache((props, cache) => {
      const finalTag = shouldUseAs && props.as || baseTag;
      let classInterpolations = [];
      const getClassNameAndRegisteredStyles = createMemo(() => {
        if (typeof props.className === 'string') {
          // Note that the below function is not just getter
          // and it also inserts the rules to stylesheet
          const className = getRegisteredStyles(cache?.registered, classInterpolations, props.className);
          return [className, cache?.registered];
        } else if (props.className != null) {
          const className = `${props.className} `;
          return [className, {}];
        }
        return ['', {}];
      });
      const getRules = createMemo(() => {
        let mergedProps = mergeProps(props, {
          get theme() {
            return useTheme();
          }
        });
        const [_, registeredStyles] = getClassNameAndRegisteredStyles();
        const serialized = serializeStyles(styles.concat(classInterpolations), registeredStyles, mergedProps);
        const rules = insertStyles(cache, serialized, typeof finalTag === 'string');
        return {
          rules,
          serialized
        };
      });
      const className = createMemo(() => {
        let [className, _] = getClassNameAndRegisteredStyles();
        const rulesSerialized = getRules();
        if (rulesSerialized == null) return "";
        className += `${cache?.key}-${rulesSerialized.serialized.name}`;
        if (targetClassName !== undefined) {
          className += ` ${targetClassName}`;
        }
        return className;
      });

      // const finalShouldForwardProp =
      //   shouldUseAs && shouldForwardProp === undefined
      //     ? getDefaultShouldForwardProp(finalTag)
      //     : defaultShouldForwardProp

      const newProps = mergeProps(props);

      // for (let key in props) {
      // if (key === 'className' || key === 'ref') continue

      // if (shouldUseAs && key === 'as') {
      //   delete newProps[key]
      //   continue
      // }

      // if (!finalShouldForwardProp(key)) {
      //   delete newProps[key]
      //   // newProps[key] = (props as any)[key]
      // }
      // }

      // newProps.className = className
      // newProps.ref = ref

      const element = createComponent(Dynamic, mergeProps$1({
        component: finalTag
      }, newProps, {
        get className() {
          return props.class ? `${className()} ${props.class}` : className();
        }
      }));
      if (!isBrowser && getRules().rules !== undefined) {
        const rulesSerialized = getRules();
        let serializedNames = rulesSerialized.serialized.name;
        let next = rulesSerialized.serialized.next;
        while (next !== undefined) {
          serializedNames += ' ' + next.name;
          next = next.next;
        }
        return [ssrElement("style", {
          [`data-emotion`]: `${cache?.key} ${serializedNames}`,
          dangerouslySetInnerHTML: {
            __html: rulesSerialized.rules
          },
          nonce: cache?.sheet.nonce
        }, undefined, true), element];
      }
      return element;
    })

    // Styled.displayName =
    //   identifierName !== undefined
    //     ? identifierName
    //     : `Styled(${
    //         typeof baseTag === 'string'
    //           ? baseTag
    //           : baseTag.displayName || baseTag.name || 'Component'
    //       })`
    // ;(Styled as any).defaultProps = tag.defaultProps(
    //   Styled as any
    // ).__emotion_real = Styled
    ;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value() {
        if (targetClassName === undefined && "production" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        }
        return `.${targetClassName}`;
      }
    });
    Styled.withComponent = (nextTag, nextOptions) => {
      return createStyled(nextTag, {
        ...options,
        ...nextOptions,
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })(
      // @ts-ignore
      ...styles);
    };
    return Styled;
  };
};

const styled = createStyled.bind();

var ColorScheme = /* @__PURE__ */ ((ColorScheme2) => {
  ColorScheme2[ColorScheme2["Dark"] = 0] = "Dark";
  ColorScheme2[ColorScheme2["Light"] = 1] = "Light";
  return ColorScheme2;
})(ColorScheme || {});
const getSystemColorScheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? 0 /* Dark */ : 1 /* Light */;
function onSystemColorSchemeChange(onChange) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const themeSetter = () => {
    if (media.matches) {
      onChange(0 /* Dark */);
    } else {
      onChange(1 /* Light */);
    }
  };
  media.addEventListener("change", themeSetter);
  return () => media.removeEventListener("change", themeSetter);
}

const Column = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: start;
    ${(p) => p.gap != null ? "gap:" + p.gap + ";" : null}
`;

const H1 = styled("h1")`
    font-family: ${p => p.theme.font.primary};
    color: ${p => p.theme.colors.onBg};
`;
const H2 = styled("h2")`
    font-family: ${p => p.theme.font.primary};
    color: ${p => p.theme.colors.onBg};
`;
const H3 = styled("h3")`
    font-family: ${p => p.theme.font.primary};
    color: ${p => p.theme.colors.onBg};
`;
const H4 = styled("h4")`
    font-family: ${p => p.theme.font.primary};
    color: ${p => p.theme.colors.onBg};
`;
const H5 = styled("h5")`
    font-family: ${p => p.theme.font.primary};
    color: ${p => p.theme.colors.onBg};
`;
const H6 = styled("h6")`
    font-family: ${p => p.theme.font.primary};
    color: ${p => p.theme.colors.onBg};
`;

const AppBarContainer = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    padding: 0 1em;
    height: 4em;
    background: ${p => p.theme.colors.bg300};
`;
const NavIconContainer = styled('div')`
    margin-right: 1rem;
`;
const TitleContainer = styled(H3)`

`;
const GrowingSpacer = styled("div")`
    flex: 1;
`;
const AppBarActions = styled("div")`

`;
function AppBar(props) {
  return createComponent(AppBarContainer, {
    get children() {
      return [props.navIcon != null ? createComponent(NavIconContainer, {
        get children() {
          return props.navIcon;
        }
      }) : null, createComponent(TitleContainer, {
        get children() {
          return props.title;
        }
      }), createComponent(GrowingSpacer, {}), props.actions != null ? createComponent(AppBarActions, {
        get children() {
          return props.actions;
        }
      }) : null];
    }
  });
}

function rgbColorWithOpacity(color, opacity) {
  return color.substring(0, color.length - 1) + "," + Math.min(1, Math.max(0, opacity)) + ")";
}

function putRippleStylesInDocument() {
  const rippleStyles = document.getElementById("anique-ripple-styles");
  if (rippleStyles == null) {
    const style = document.createElement("style");
    style.id = "anique-ripple-styles";
    style.innerHTML = "@keyframes ripple { to { transform: scale(2); opacity: 0; } }";
    document.head.appendChild(style);
  }
}
function createRipple(event, color, duration, percentSize, followMouse) {
  const container = event.currentTarget;
  putRippleStylesInDocument();
  const circle = document.createElement("span");
  const exactDuration = duration || 600;
  circle.className = "anq-ripple";
  circle.style.position = "absolute";
  circle.style.borderRadius = "50%";
  circle.style.transform = "scale(0)";
  circle.style.animation = "ripple " + exactDuration + "ms linear";
  circle.style.backgroundColor = color || "rgba(255,255,255,0.7)";
  const sizeMultiplier = percentSize || 1;
  const diameter = Math.max(container.clientWidth * sizeMultiplier, container.clientHeight * sizeMultiplier);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  const containerRect = container.getBoundingClientRect();
  const followEventPosition = followMouse || false;
  const eventX = followEventPosition ? event.clientX : containerRect.left + radius;
  const eventY = followEventPosition ? event.clientY : containerRect.top + radius;
  circle.style.left = `${eventX - radius}px`;
  circle.style.top = `${eventY - radius}px`;
  const ripple = container.getElementsByClassName("anq-ripple")[0];
  if (ripple) {
    ripple.remove();
  }
  container.appendChild(circle);
}
function createThemedRipple(onBackground, event, duration) {
  return createRipple(event, rgbColorWithOpacity(onBackground, 0.9), duration != null ? duration : 350, void 0, true);
}

const IconButtonContainer = styled("div")`

    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    ${p => p.disableAutoFill ? "" : `fill:${p.theme.colors.onBg};`}
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
        width: 1.5rem;
        height: 1.5rem;
    }

    &:hover {
        background: ${p => rgbColorWithOpacity(p.theme.colors.onBg, 0.2)};
    }

`;
function IconButton(props) {
  const theme = useTheme();
  return createComponent(IconButtonContainer, {
    get children() {
      return props.children;
    },
    onClick: e => {
      createThemedRipple(theme.colors.onBg, e);
      props.onClick != null ? props.onClick() : null;
    }
  });
}

const _tmpl$$5 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>menu</title><path d=\"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z\"></path></svg>"];
function Menu() {
  return ssr(_tmpl$$5, ssrHydrationKey());
}

const BackdropContainer = styled("div")`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .2);
`;
styled("div")`
    position: relative;
    width: 100%;
    height: 100%;
`;
function Backdrop(props) {
  return createComponent(BackdropContainer, {
    get style() {
      return {
        display: props.isVisible() ? "block" : "none"
      };
    },
    get ["class"]() {
      return props.class;
    },
    onClick: e => {
      if (e.target === e.currentTarget || e.target === e.currentTarget.firstElementChild) {
        props.onClickOutside();
      }
    },
    get children() {
      return props.children;
    }
  });
}

const Text = styled("span")`
    font-family: ${(p) => p.theme.font.secondary};
    color: ${(p) => p.theme.colors[p.color || "onBg"]};
`;
styled(Text)`
    font-size: 0.8rem;
`;

const DrawerContainer = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 260px;
    height: 100vh;
    background: ${p => p.theme.colors.bg200};
    box-sizing: border-box;
    padding: 1em;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 1em;
    overflow-y: scroll;
`;
function ModalDrawer(props) {
  return createComponent(Portal, {
    get children() {
      return createComponent(Backdrop, {
        get isVisible() {
          return props.isOpen;
        },
        get onClickOutside() {
          return props.onCloseRequest;
        },
        get children() {
          return createComponent(DrawerContainer, {
            get children() {
              return props.children;
            }
          });
        }
      });
    }
  });
}
const DrawerItem = styled("div")`
    width: 100%;
    box-sizing: border-box;
    padding: 0.8em 1em;
    background: ${p => p.theme.colors.bg400};
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background: ${p => p.theme.colors.bg500};
    }
`;
const DrawerSectionContainer = styled("div")`
    box-sizing: border-box;
    ${p => p.indent == null || p.indent == true ? "padding: 0 0 0 1em;" : ""}
    display: flex;
    flex-direction: column;
    gap: inherit;
`;
function DrawerSectionItem(props) {
  return [createComponent(Text, {
    color: "onBg500",
    get children() {
      return props.title;
    }
  }), createComponent(DrawerSectionContainer, {
    get indent() {
      return props.indent;
    },
    get children() {
      return props.children;
    }
  })];
}

class DefaultThemeBreakpoints {
  constructor() {
    this.unit = "px";
    this.step = 5;
    this.values = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    };
    this.up = (key) => {
      const value = key instanceof Number ? key : this.values[key];
      return `@media (min-width:${value}${this.unit})`;
    };
    this.down = (key) => {
      const value = key instanceof Number ? key : this.values[key];
      return `@media (max-width:${value - this.step / 100}${this.unit})`;
    };
    this.between = (start, end) => {
      const startValue = start instanceof Number ? start : this.values[start];
      const endValue = end instanceof Number ? end : this.values[end];
      return `@media (min-width:${startValue}${this.unit}) and (max-width:${endValue}${this.unit})`;
    };
  }
}

const CommonResultColors = {
  success: "rgb(21,87,36)",
  onSuccess: "rgb(255,255,255)",
  warning: "rgb(133,100,4)",
  onWarning: "rgb(255,255,255)",
  error: "rgb(239,68,68)",
  onError: "rgb(189,189,189)",
  info: "rgb(68,148,239)",
  onInfo: "rgb(189,189,189)"
};
const CommonFont = {
  primary: '"Helvetica Neue", Arial, sans-serif',
  secondary: "Roboto, Helvetica, Arial, sans-serif"
};
const CommonBorder = {
  smRadius: "0.25em",
  mdRadius: "0.5em",
  lgRadius: "1em"
};
const CommonAnimation = {
  timing: {
    ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    slider: "cubic-bezier(0.05, 0.95, 0.35, 1.05)",
    slideStop: "cubic-bezier(0.05, 0.05, 0, 1)",
    timingThrottle: "cubic-bezier(0.95, 0, 0.95, 0.25)"
  }
};
const darkTheme = {
  border: CommonBorder,
  font: CommonFont,
  breakpoints: new DefaultThemeBreakpoints(),
  animation: CommonAnimation,
  colors: {
    ...CommonResultColors,
    primary: "rgb(23,207,185)",
    primary100: "rgb(44,232,210)",
    primary200: "rgb(85,236,219)",
    primary300: "rgb(126,241,227)",
    primary400: "rgb(168,245,236)",
    primary500: "rgb(209,250,245)",
    accent: "rgb(59,130,246)",
    accent100: "rgb(89,150,247)",
    accent200: "rgb(119,168,249)",
    accent300: "rgb(148,187,250)",
    accent400: "rgb(177,206,251)",
    accent500: "rgb(206,224,253)",
    bg: "rgb(2,7,13)",
    bg100: "rgb(7,24,44)",
    bg200: "rgb(12,40,75)",
    bg300: "rgb(17,57,106)",
    bg400: "rgb(21,71,132)",
    bg500: "rgb(25,87,163)",
    onBg: "rgb(255,255,255)",
    onBg100: "rgb(237,237,237)",
    onBg200: "rgb(219,219,219)",
    onBg300: "rgb(201,201,201)",
    onBg400: "rgb(184,184,184)",
    onBg500: "rgb(166,166,166)",
    backdrop: "rgba(15, 23, 42, 1)"
  }
};
const lightTheme = {
  font: CommonFont,
  border: CommonBorder,
  breakpoints: new DefaultThemeBreakpoints(),
  animation: CommonAnimation,
  colors: {
    ...CommonResultColors,
    primary: "rgb(23,207,185)",
    primary100: "rgb(18,161,144)",
    primary200: "rgb(15,138,123)",
    primary300: "rgb(13,115,103)",
    primary400: "rgb(10,92,82)",
    primary500: "rgb(8,69,62)",
    accent: "rgb(59,130,246)",
    accent100: "rgb(26,110,244)",
    accent200: "rgb(11,92,224)",
    accent300: "rgb(9,78,190)",
    accent400: "rgb(7,64,156)",
    accent500: "rgb(6,50,122)",
    bg: "rgb(246,246,247)",
    bg100: "rgb(225,225,229)",
    bg200: "rgb(204,204,209)",
    bg300: "rgb(182,182,190)",
    bg400: "rgb(160,160,171)",
    bg500: "rgb(139,139,152)",
    onBg: "rgb(0,0,0)",
    onBg100: "rgb(23,23,23)",
    onBg200: "rgb(46,46,46)",
    onBg300: "rgb(69,69,69)",
    onBg400: "rgb(92,92,92)",
    onBg500: "rgb(115,115,115)",
    backdrop: "rgba(0, 0, 0, 0.5)"
  }
};

const _tmpl$$4 = ["<div", " style=\"", "\">", "</div>"],
  _tmpl$2$2 = ["<main", "><!--#-->", "<!--/--><style>", "</style><!--#-->", "<!--/--></main>"];
const Link = styled(A)`
    text-decoration: none;
    color: ${p => p.theme.colors.onBg100};
`;
function PageContainer(props) {
  const [isDrawerOpen, setIsDrawerOpen] = createSignal(false);
  const [colorScheme, setColorScheme] = createSignal(ColorScheme.Dark);
  createEffect(() => {
    setColorScheme(getSystemColorScheme());
    onSystemColorSchemeChange(setColorScheme);
  });
  const theme = () => colorScheme() == ColorScheme.Dark ? darkTheme : lightTheme;
  const style = props.style || {};
  return createComponent(ThemeProvider, {
    theme: theme,
    get children() {
      return ssr(_tmpl$2$2, ssrHydrationKey(), escape(createComponent(Title, {
        children: "Anique | UI"
      })), `

                    :root {
                        color-scheme: ${colorScheme() === ColorScheme.Dark ? "dark" : "light"};
                        font-size: 15px;
                        color: ${theme().colors.onBg};
                        font-family: 'Roboto', 'Helvetica', sans-serif;
                    }

                `, escape(createComponent(Column, {
        get children() {
          return [createComponent(AppBar, {
            get navIcon() {
              return createComponent(IconButton, {
                onClick: () => setIsDrawerOpen(!isDrawerOpen()),
                get children() {
                  return createComponent(Menu, {});
                }
              });
            },
            title: "Anique"
          }), createComponent(ModalDrawer, {
            isOpen: isDrawerOpen,
            onCloseRequest: () => setIsDrawerOpen(false),
            get children() {
              return [createComponent(Link, {
                href: "/",
                get children() {
                  return createComponent(DrawerItem, {
                    children: "Home"
                  });
                }
              }), createComponent(DrawerSectionItem, {
                title: "Components",
                indent: false,
                get children() {
                  return [createComponent(DrawerSectionItem, {
                    title: "Interactive",
                    get children() {
                      return [createComponent(Link, {
                        href: "/fab",
                        get children() {
                          return createComponent(DrawerItem, {
                            children: "Floating Action Button"
                          });
                        }
                      }), createComponent(Link, {
                        href: "/button",
                        get children() {
                          return createComponent(DrawerItem, {
                            children: "Button"
                          });
                        }
                      }), createComponent(Link, {
                        href: "/checkbox",
                        get children() {
                          return createComponent(DrawerItem, {
                            children: "Checkbox"
                          });
                        }
                      }), createComponent(Link, {
                        href: "/radio",
                        get children() {
                          return createComponent(DrawerItem, {
                            children: "Radio"
                          });
                        }
                      })];
                    }
                  }), createComponent(DrawerSectionItem, {
                    title: "Layout",
                    get children() {
                      return [createComponent(Link, {
                        href: "/column",
                        get children() {
                          return createComponent(DrawerItem, {
                            children: "Column"
                          });
                        }
                      }), createComponent(Link, {
                        href: "/row",
                        get children() {
                          return createComponent(DrawerItem, {
                            children: "Row"
                          });
                        }
                      }), createComponent(Link, {
                        href: "/dialog",
                        get children() {
                          return createComponent(DrawerItem, {
                            children: "Dialog"
                          });
                        }
                      }), createComponent(Link, {
                        href: "/appbar",
                        get children() {
                          return createComponent(DrawerItem, {
                            children: "AppBar"
                          });
                        }
                      })];
                    }
                  }), createComponent(DrawerSectionItem, {
                    title: "Text",
                    get children() {
                      return [createComponent(Link, {
                        href: "/headings",
                        get children() {
                          return createComponent(DrawerItem, {
                            children: "Headings"
                          });
                        }
                      }), createComponent(Link, {
                        href: "/paragraph",
                        get children() {
                          return createComponent(DrawerItem, {
                            children: "Paragraph"
                          });
                        }
                      })];
                    }
                  }), createComponent(DrawerSectionItem, {
                    title: "Other",
                    get children() {
                      return createComponent(Link, {
                        href: "/spinner",
                        get children() {
                          return createComponent(DrawerItem, {
                            children: "Spinner"
                          });
                        }
                      });
                    }
                  })];
                }
              })];
            }
          }), ssr(_tmpl$$4, ssrHydrationKey(), ssrStyle({
            margin: "0rem 6rem",
            ...style
          }), escape(props.children))];
        }
      })));
    }
  });
}

const Card = styled("div")`
    border-radius: ${p => p.theme.border.mdRadius};
    background: ${p => p.theme.colors.bg200};
    box-sizing: border-box;
    padding: 1em;
`;

const Icon = styled("div")`
    fill: ${p => p.theme.colors.onBg};
    width: 1.5rem;
    height: 1.5rem;
`;

const Row = styled("div")`
    display: flex;
    flex-direction: row;
    ${(p) => p.alignment != null ? "align-items:" + p.alignment + ";" : ""}
    ${(p) => p.gap != null ? "gap:" + p.gap + ";" : null}
`;

function AppBarPage() {
  return createComponent(PageContainer, {
    style: {
      width: "100%",
      margin: "0",
      "box-sizing": "border-box",
      padding: "0 6em"
    },
    get children() {
      return [createComponent(H2, {
        children: "Basic App Bar"
      }), createComponent(Card, {
        get children() {
          return createComponent(AppBar, {
            title: "Demo"
          });
        }
      }), createComponent(H2, {
        children: "App Bar With Icon"
      }), createComponent(Card, {
        get children() {
          return createComponent(AppBar, {
            title: "Demo",
            get navIcon() {
              return createComponent(Icon, {
                get children() {
                  return createComponent(Menu, {});
                }
              });
            }
          });
        }
      }), createComponent(H2, {
        children: "App Bar With IconButton"
      }), createComponent(Card, {
        get children() {
          return createComponent(AppBar, {
            title: "Demo",
            get navIcon() {
              return createComponent(IconButton, {
                get children() {
                  return createComponent(Menu, {});
                }
              });
            }
          });
        }
      }), createComponent(H2, {
        children: "App Bar With Actions"
      }), createComponent(Card, {
        get children() {
          return createComponent(AppBar, {
            title: "Demo",
            get navIcon() {
              return createComponent(IconButton, {
                get children() {
                  return createComponent(Menu, {});
                }
              });
            },
            get actions() {
              return createComponent(Row, {
                get children() {
                  return [createComponent(IconButton, {
                    get children() {
                      return createComponent(Menu, {});
                    }
                  }), createComponent(IconButton, {
                    get children() {
                      return createComponent(Menu, {});
                    }
                  }), createComponent(IconButton, {
                    get children() {
                      return createComponent(Menu, {});
                    }
                  })];
                }
              });
            }
          });
        }
      })];
    }
  });
}

const ButtonBase = styled("button")`

    box-sizing: border-box;
    padding: 0.8em 1em;
    background: ${p => p.theme.colors.bg400};
    border-radius: 8px;
    cursor: pointer;

    border: 0;
    outline: 0;
    overflow: hidden;

    &:hover {
        background: ${p => p.theme.colors.bg500};
    }

    &:active {
        background: ${p => p.theme.colors.bg400};
    }

`;
const Button = ButtonBase;

function ButtonPage() {
  return createComponent(PageContainer, {
    get children() {
      return [createComponent(H1, {
        children: "Button"
      }), createComponent(Card, {
        get children() {
          return createComponent(Button, {
            children: "Home"
          });
        }
      })];
    }
  });
}

const Spacer = styled("div")`
    width: ${(p) => p.width || "100%"};
    height: ${(p) => p.height || "100%"};
`;

const _tmpl$$3 = ["<input", " type=\"checkbox\" style=\"", "\"", ">"];
function Checkbox(props) {
  return ssr(_tmpl$$3, ssrHydrationKey(), "width:" + "1em" + (";height:" + "1em"), ssrAttribute("checked", props.isChecked != null ? props.isChecked() : undefined, true));
}
function LabeledCheckbox(props) {
  return props.label == null && props.description == null ? createComponent(Checkbox, props) : props.description == null ? createComponent(Row, {
    alignment: "center",
    get children() {
      return [createComponent(Checkbox, props), createComponent(Spacer, {
        width: "0.5em"
      }), createComponent(Text, {
        get children() {
          return props.label;
        }
      })];
    }
  }) : createComponent(Row, {
    alignment: "center",
    get children() {
      return [createComponent(Checkbox, props), createComponent(Spacer, {
        width: "0.5em"
      }), createComponent(Column, {
        get children() {
          return [createComponent(Text, {
            get children() {
              return props.label;
            }
          }), createComponent(Text, {
            color: "onBg300",
            get children() {
              return props.description;
            }
          })];
        }
      })];
    }
  });
}

function BasicCheckboxExample() {
  const [isChecked, setIsChecked] = createSignal(false);
  return createComponent(Card, {
    get children() {
      return createComponent(Checkbox, {
        isChecked: isChecked,
        onChange: setIsChecked
      });
    }
  });
}
function CheckboxWithLabel() {
  const [isChecked, setIsChecked] = createSignal(false);
  return createComponent(Card, {
    get children() {
      return createComponent(LabeledCheckbox, {
        isChecked: isChecked,
        onChange: setIsChecked,
        label: "Terms & Services"
      });
    }
  });
}
function CheckboxWithLabelDescription() {
  const [isChecked, setIsChecked] = createSignal(false);
  return createComponent(Card, {
    get children() {
      return createComponent(LabeledCheckbox, {
        isChecked: isChecked,
        onChange: setIsChecked,
        label: "Terms & Services",
        description: "I agree to terms & services of this company"
      });
    }
  });
}
function CheckboxPage() {
  return createComponent(PageContainer, {
    get children() {
      return [createComponent(H1, {
        children: "Basic Checkbox"
      }), createComponent(BasicCheckboxExample, {}), createComponent(H1, {
        children: "Checkbox with Label"
      }), createComponent(CheckboxWithLabel, {}), createComponent(H1, {
        children: "Checkbox with Label & Description"
      }), createComponent(CheckboxWithLabelDescription, {})];
    }
  });
}

function ColumnPage$1() {
  return createComponent(PageContainer, {
    get children() {
      return [createComponent(H1, {
        children: "Column"
      }), createComponent(Card, {
        get children() {
          return createComponent(Column, {
            gap: "1em",
            get children() {
              return [createComponent(Button, {
                children: "First"
              }), createComponent(Button, {
                children: "Second"
              }), createComponent(Button, {
                children: "Third"
              }), createComponent(Button, {
                children: "Fourth"
              }), createComponent(Button, {
                children: "Fifth"
              })];
            }
          });
        }
      })];
    }
  });
}

const Centered = styled("div")`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const DialogContent = styled("div")`
    border-radius: 1em;
    background: ${p => p.theme.colors.bg400};
    box-sizing: border-box;
    padding: 2em;
`;
function Dialog(props) {
  return createComponent(Portal, {
    get children() {
      return createComponent(Backdrop, {
        isVisible: () => true,
        get onClickOutside() {
          return props.onCloseRequest;
        },
        get children() {
          return createComponent(Centered, {
            get children() {
              return createComponent(DialogContent, {
                get children() {
                  return props.children;
                }
              });
            }
          });
        }
      });
    }
  });
}

function DialogPage() {
  const [isOpen, setIsOpen] = createSignal(false);
  return createComponent(PageContainer, {
    get children() {
      return [createComponent(H1, {
        children: "Dialog"
      }), createComponent(Card, {
        get children() {
          return createComponent(Button, {
            onClick: e => setIsOpen(!isOpen()),
            children: "Open Dialog"
          });
        }
      }), isOpen() ? createComponent(Dialog, {
        onCloseRequest: () => setIsOpen(false),
        get children() {
          return createComponent(Centered, {
            children: "Hello Darkness My Old Friend"
          });
        }
      }) : null];
    }
  });
}

const FabBase = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3em;
    background: ${p => p.theme.colors.bg300};
    cursor: pointer;

    &:hover {
        background: ${p => p.theme.colors.bg400};
    }

    &:active {
        background: ${p => p.theme.colors.bg500};
    }
`;
const Fab = styled(FabBase)`
    width: 3em;
    border-radius: 50%;
`;
const ExtendedFab = styled(FabBase)`
    gap: 0.4em;
    box-sizing: border-box;
    padding: 0 1em;
    width: max-content;
    border-radius: 1.5em;
`;

function FabPage() {
  return createComponent(PageContainer, {
    get children() {
      return [createComponent(H1, {
        children: "Fab"
      }), createComponent(Card, {
        get children() {
          return createComponent(Fab, {
            get children() {
              return createComponent(Icon, {
                get children() {
                  return createComponent(Menu, {});
                }
              });
            }
          });
        }
      }), createComponent(H1, {
        children: "Extended Fab"
      }), createComponent(Card, {
        get children() {
          return createComponent(ExtendedFab, {
            get children() {
              return [createComponent(Icon, {
                get children() {
                  return createComponent(Menu, {});
                }
              }), createComponent(Text, {
                children: "Extended Me"
              })];
            }
          });
        }
      })];
    }
  });
}

function Headings() {
  return createComponent(PageContainer, {
    get children() {
      return [createComponent(H1, {
        children: "Heaings"
      }), createComponent(H2, {
        children: "H1"
      }), createComponent(Card, {
        get children() {
          return createComponent(H1, {
            children: "This is my H1 Heading"
          });
        }
      }), createComponent(H2, {
        children: "H2"
      }), createComponent(Card, {
        get children() {
          return createComponent(H2, {
            children: "This is my H2 Heading"
          });
        }
      }), createComponent(H3, {
        children: "H3"
      }), createComponent(Card, {
        get children() {
          return createComponent(H3, {
            children: "This is my H3 Heading"
          });
        }
      }), createComponent(H4, {
        children: "H4"
      }), createComponent(Card, {
        get children() {
          return createComponent(H4, {
            children: "This is my H4 Heading"
          });
        }
      }), createComponent(H5, {
        children: "H5"
      }), createComponent(Card, {
        get children() {
          return createComponent(H5, {
            children: "This is my H5 Heading"
          });
        }
      }), createComponent(H6, {
        children: "H6"
      }), createComponent(Card, {
        get children() {
          return createComponent(H6, {
            children: "This is my H6 Heading"
          });
        }
      })];
    }
  });
}

const P = styled("p")`
    font-family: ${(p) => p.theme.font.secondary};
`;

const _tmpl$$2 = ["<ul", "><li><!--#-->", "<!--/--><!--#-->", "<!--/--></li><li><!--#-->", "<!--/--><!--#-->", "<!--/--><ul><li>A styled function which takes a tag or a component</li><li>shouldForwardProp function which determines whether a prop should be forwarded</li></ul></li><li><!--#-->", "<!--/--><!--#-->", "<!--/--></li><li><!--#-->", "<!--/--><!--#-->", "<!--/--></li></ul>"],
  _tmpl$2$1 = ["<code", ">CSS in JS</code>"],
  _tmpl$3 = ["<ul", "><li><!--#-->", "<!--/--><!--#-->", "<!--/--></li><li><!--#-->", "<!--/--><!--#-->", "<!--/--></li><li><!--#-->", "<!--/--><!--#-->", "<!--/--></li><li><!--#-->", "<!--/--><!--#-->", "<!--/--></li></ul>"];
function Home() {
  return createComponent(PageContainer, {
    get children() {
      return [createComponent(H1, {
        children: "Anique for SolidJS"
      }), createComponent(H2, {
        children: "What ?"
      }), createComponent(P, {
        children: "Anique is a UI component library for SolidJS, Several reasons why we love Anique"
      }), ssr(_tmpl$$2, ssrHydrationKey(), escape(createComponent(H4, {
        children: "Lightweight"
      })), escape(createComponent(P, {
        children: "Anique has no dependencies on external libraries except for a CSS in JS library, Its lightweight"
      })), escape(createComponent(H4, {
        children: "Css in JS"
      })), escape(createComponent(P, {
        get children() {
          return ["Anique has its own CSS in JS library, which it depends on, The library makes use of ", createComponent(A, {
            href: "/",
            children: "emotion"
          }), " in the background, so it offers a similar API, We hope to make this library runtime free in the future, if we don't die of old age, It has following set of features, Its minimal as of now"];
        }
      })), escape(createComponent(H4, {
        children: "Typesafe"
      })), escape(createComponent(P, {
        children: "Anique uses typescript and is typesafe"
      })), escape(createComponent(H4, {
        children: "Minimal & Performant"
      })), escape(createComponent(P, {
        children: "Anique has minimal set of components and is therefore performant, We plan make it more customizable without affecting the performance"
      }))), createComponent(H2, {
        children: "Why ?"
      }), createComponent(P, {
        children: "There are many UI component libraries, They all have their pros and cons but these cons unfortunately outweigh the pros."
      }), ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent(H4, {
        children: "Not enough libraries"
      })), escape(createComponent(P, {
        children: "Wait, I just said there are many UI component libraries, Well, Although there's too many UI component libraries, There aren't enough libraries for SolidJS that are good."
      })), escape(createComponent(H4, {
        children: "Framework Independent Libraries"
      })), escape(createComponent(P, {
        children: "Framework independent libraries are good, since they don't tie you to a framework, but then why use a framework like Solid or React in the first place, Otherwise these libraries have their own learning curve apart from the framework and aren't easy to integrate or use for a beginner. Personally, if you enjoy writing UI in these libraries, go for it."
      })), escape(createComponent(H4, {
        children: "SUID (MUI)"
      })), escape(createComponent(P, {
        children: "There's a port of MUI for SolidJS which is good, The UI is amazing, The components work & everything. The cons are the legacy style system, complicated naming & components.We actually tried forking SUID, but we gave up since the code written was really hard to tinker with."
      })), escape(createComponent(H4, {
        children: "Other Libraries"
      })), escape(createComponent(P, {
        get children() {
          return ["There are other UI component libraries that use different set of technologies & then user must also adopt those technologies in order to write their UI. For me, I prefer ", ssr(_tmpl$2$1, ssrHydrationKey()), " which doesn't happen to be their choice."];
        }
      })))];
    }
  });
}

function Paragraph() {
  return createComponent(PageContainer, {
    get children() {
      return [createComponent(H1, {
        children: "Paragraph"
      }), createComponent(Card, {
        get children() {
          return createComponent(P, {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          });
        }
      })];
    }
  });
}

const _tmpl$$1 = ["<input", " type=\"radio\" style=\"", "\"", ">"];
function Radio(props) {
  return ssr(_tmpl$$1, ssrHydrationKey(), "width:" + "1em" + (";height:" + "1em"), ssrAttribute("checked", props.isChecked != null ? props.isChecked() : undefined, true));
}
function LabeledRadio(props) {
  return props.label == null && props.description == null ? createComponent(Radio, props) : props.description == null ? createComponent(Row, {
    alignment: "center",
    get children() {
      return [createComponent(Radio, props), createComponent(Spacer, {
        width: "0.5em"
      }), createComponent(Text, {
        get children() {
          return props.label;
        }
      })];
    }
  }) : createComponent(Row, {
    alignment: "center",
    get children() {
      return [createComponent(Radio, props), createComponent(Spacer, {
        width: "0.5em"
      }), createComponent(Column, {
        get children() {
          return [createComponent(Text, {
            get children() {
              return props.label;
            }
          }), createComponent(Text, {
            color: "onBg300",
            get children() {
              return props.description;
            }
          })];
        }
      })];
    }
  });
}

function BasicRadioExample() {
  const [isChecked, setIsChecked] = createSignal(false);
  return createComponent(Card, {
    get children() {
      return createComponent(Radio, {
        isChecked: isChecked,
        onChange: setIsChecked
      });
    }
  });
}
function RadioWithLabel() {
  const [isChecked, setIsChecked] = createSignal(false);
  return createComponent(Card, {
    get children() {
      return createComponent(LabeledRadio, {
        isChecked: isChecked,
        onChange: setIsChecked,
        label: "Terms & Services"
      });
    }
  });
}
function RadioWithLabelDescription() {
  const [isChecked, setIsChecked] = createSignal(false);
  return createComponent(Card, {
    get children() {
      return createComponent(LabeledRadio, {
        isChecked: isChecked,
        onChange: setIsChecked,
        label: "Terms & Services",
        description: "I agree to terms & services of this company"
      });
    }
  });
}
function RadioPage() {
  return createComponent(PageContainer, {
    get children() {
      return [createComponent(H1, {
        children: "Basic Radio"
      }), createComponent(BasicRadioExample, {}), createComponent(H1, {
        children: "Radio with Label"
      }), createComponent(RadioWithLabel, {}), createComponent(H1, {
        children: "Radio with Label & Description"
      }), createComponent(RadioWithLabelDescription, {})];
    }
  });
}

function ColumnPage() {
  return createComponent(PageContainer, {
    get children() {
      return [createComponent(H1, {
        children: "Row"
      }), createComponent(Card, {
        get children() {
          return createComponent(Row, {
            gap: "1em",
            get children() {
              return [createComponent(Button, {
                children: "First"
              }), createComponent(Button, {
                children: "Second"
              }), createComponent(Button, {
                children: "Third"
              }), createComponent(Button, {
                children: "Fourth"
              }), createComponent(Button, {
                children: "Fifth"
              })];
            }
          });
        }
      })];
    }
  });
}

const _tmpl$ = ["<path", " d=\"M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z\"></path>"],
  _tmpl$2 = ["<div", " style=\"", "\">", "</div>"];
const AniqueStyledSpinner = styled("svg")`
    animation: spin 1s linear infinite;
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
const Spinner = props => {
  const theme = useTheme();
  return ssr(_tmpl$2, ssrHydrationKey(), "width:" + "32px" + (";height:" + "32px"), escape(createComponent(AniqueStyledSpinner, {
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    "data-icon": "spinner",
    width: '32',
    height: '32',
    get fill() {
      return theme.colors[props.color || "onBg"];
    },
    get children() {
      return ssr(_tmpl$, ssrHydrationKey());
    }
  })));
};

function SpinnerPage() {
  return createComponent(PageContainer, {
    get children() {
      return createComponent(Column, {
        get children() {
          return [createComponent(H2, {
            children: "Spinner"
          }), createComponent(Card, {
            get children() {
              return createComponent(Spinner, {});
            }
          }), createComponent(H2, {
            children: "Primary Colored Spinner"
          }), createComponent(Card, {
            get children() {
              return createComponent(Spinner, {
                color: "primary"
              });
            }
          }), createComponent(H2, {
            children: "Accent Colored Spinner"
          }), createComponent(Card, {
            get children() {
              return createComponent(Spinner, {
                color: "accent"
              });
            }
          }), createComponent(H2, {
            children: "Error Colored Spinner"
          }), createComponent(Card, {
            get children() {
              return createComponent(Spinner, {
                color: "error"
              });
            }
          })];
        }
      });
    }
  });
}

/// <reference path="../server/types.tsx" />

const fileRoutes = [{
  component: NotFound,
  path: "/*404"
}, {
  component: AppBarPage,
  path: "/appbar"
}, {
  component: ButtonPage,
  path: "/button"
}, {
  component: CheckboxPage,
  path: "/checkbox"
}, {
  component: ColumnPage$1,
  path: "/column"
}, {
  component: DialogPage,
  path: "/dialog"
}, {
  component: FabPage,
  path: "/fab"
}, {
  component: Headings,
  path: "/headings"
}, {
  component: Home,
  path: "/"
}, {
  component: Paragraph,
  path: "/paragraph"
}, {
  component: RadioPage,
  path: "/radio"
}, {
  component: ColumnPage,
  path: "/row"
}, {
  component: SpinnerPage,
  path: "/spinner"
}];

/**
 * Routes are the file system based routes, used by Solid App Router to show the current page according to the URL.
 */

const FileRoutes = () => {
  return fileRoutes;
};

const root = '';

function Root() {
  return createComponent(Html, {
    lang: "en",
    get children() {
      return [createComponent(Head, {
        get children() {
          return [createComponent(Title, {
            children: "Solid Account Management Demo"
          }), createComponent(Meta$1, {
            charset: "utf-8"
          }), createComponent(Meta$1, {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          })];
        }
      }), createComponent(Body, {
        get children() {
          return [createComponent(Suspense, {
            get children() {
              return createComponent(ErrorBoundary, {
                get children() {
                  return createComponent(Routes, {
                    get children() {
                      return createComponent(FileRoutes, {});
                    }
                  });
                }
              });
            }
          }), createComponent(Scripts, {})];
        }
      })];
    }
  });
}

const rootData = Object.values(/* #__PURE__ */ Object.assign({

}))[0];
const dataFn = rootData ? rootData.default : undefined;

/** Function responsible for listening for streamed [operations]{@link Operation}. */

/** Input parameters for to an Exchange factory function. */

/** Function responsible for receiving an observable [operation]{@link Operation} and returning a [result]{@link OperationResult}. */

/** This composes an array of Exchanges into a single ExchangeIO function */
const composeMiddleware = exchanges => ({
  forward
}) => exchanges.reduceRight((forward, exchange) => exchange({
  forward
}), forward);
function createHandler(...exchanges) {
  const exchange = composeMiddleware(exchanges);
  return async event => {
    return await exchange({
      forward: async op => {
        return new Response(null, {
          status: 404
        });
      }
    })(event);
  };
}
function StartRouter(props) {
  return createComponent(Router, props);
}
const docType = ssr("<!DOCTYPE html>");
function StartServer({
  event
}) {
  const parsed = new URL(event.request.url);
  const path = parsed.pathname + parsed.search;

  // @ts-ignore
  sharedConfig.context.requestContext = event;
  return createComponent(ServerContext.Provider, {
    value: event,
    get children() {
      return createComponent(MetaProvider, {
        get tags() {
          return event.tags;
        },
        get children() {
          return createComponent(StartRouter, {
            url: path,
            get out() {
              return event.routerContext;
            },
            location: path,
            get prevLocation() {
              return event.prevUrl;
            },
            data: dataFn,
            routes: fileRoutes,
            get children() {
              return [docType, createComponent(Root, {})];
            }
          });
        }
      });
    }
  });
}

function getRouteMatches(routes, path, method) {
  const segments = path.split("/").filter(Boolean);
  routeLoop:
    for (const route of routes) {
      const matchSegments = route.matchSegments;
      if (segments.length < matchSegments.length || !route.wildcard && segments.length > matchSegments.length) {
        continue;
      }
      for (let index = 0; index < matchSegments.length; index++) {
        const match = matchSegments[index];
        if (!match) {
          continue;
        }
        if (segments[index] !== match) {
          continue routeLoop;
        }
      }
      const handler = route[method];
      if (handler === "skip" || handler === void 0) {
        return;
      }
      const params = {};
      for (const { type, name, index } of route.params) {
        if (type === ":") {
          params[name] = segments[index];
        } else {
          params[name] = segments.slice(index).join("/");
        }
      }
      return { handler, params };
    }
}

let apiRoutes$1;
const registerApiRoutes = (routes) => {
  apiRoutes$1 = routes;
};
async function internalFetch(route, init, env = {}, locals = {}) {
  if (route.startsWith("http")) {
    return await fetch(route, init);
  }
  let url = new URL(route, "http://internal");
  const request = new Request(url.href, init);
  const handler = getRouteMatches(apiRoutes$1, url.pathname, request.method.toUpperCase());
  if (!handler) {
    throw new Error(`No handler found for ${request.method} ${request.url}`);
  }
  let apiEvent = Object.freeze({
    request,
    params: handler.params,
    clientAddress: "127.0.0.1",
    env,
    locals,
    $type: FETCH_EVENT,
    fetch: internalFetch
  });
  const response = await handler.handler(apiEvent);
  return response;
}

const api = [
  {
    GET: "skip",
    path: "/appbar"
  },
  {
    GET: "skip",
    path: "/button"
  },
  {
    GET: "skip",
    path: "/checkbox"
  },
  {
    GET: "skip",
    path: "/column"
  },
  {
    GET: "skip",
    path: "/dialog"
  },
  {
    GET: "skip",
    path: "/fab"
  },
  {
    GET: "skip",
    path: "/headings"
  },
  {
    GET: "skip",
    path: "/"
  },
  {
    GET: "skip",
    path: "/paragraph"
  },
  {
    GET: "skip",
    path: "/radio"
  },
  {
    GET: "skip",
    path: "/row"
  },
  {
    GET: "skip",
    path: "/spinner"
  },
  {
    GET: "skip",
    path: "/*404"
  }
];
function expandOptionals(pattern) {
  let match = /(\/?\:[^\/]+)\?/.exec(pattern);
  if (!match)
    return [pattern];
  let prefix = pattern.slice(0, match.index);
  let suffix = pattern.slice(match.index + match[0].length);
  const prefixes = [prefix, prefix += match[1]];
  while (match = /^(\/\:[^\/]+)\?/.exec(suffix)) {
    prefixes.push(prefix += match[1]);
    suffix = suffix.slice(match[0].length);
  }
  return expandOptionals(suffix).reduce(
    (results, expansion) => [...results, ...prefixes.map((p) => p + expansion)],
    []
  );
}
function routeToMatchRoute(route) {
  const segments = route.path.split("/").filter(Boolean);
  const params = [];
  const matchSegments = [];
  let score = 0;
  let wildcard = false;
  for (const [index, segment] of segments.entries()) {
    if (segment[0] === ":") {
      const name = segment.slice(1);
      score += 3;
      params.push({
        type: ":",
        name,
        index
      });
      matchSegments.push(null);
    } else if (segment[0] === "*") {
      score -= 1;
      params.push({
        type: "*",
        name: segment.slice(1),
        index
      });
      wildcard = true;
    } else {
      score += 4;
      matchSegments.push(segment);
    }
  }
  return {
    ...route,
    score,
    params,
    matchSegments,
    wildcard
  };
}
const allRoutes = api.flatMap((route) => {
  const paths = expandOptionals(route.path);
  return paths.map((path) => ({ ...route, path }));
}).map(routeToMatchRoute).sort((a, b) => b.score - a.score);
registerApiRoutes(allRoutes);
function getApiHandler(url, method) {
  return getRouteMatches(allRoutes, url.pathname, method.toUpperCase());
}

const apiRoutes = ({ forward }) => {
  return async (event) => {
    let apiHandler = getApiHandler(new URL(event.request.url), event.request.method);
    if (apiHandler) {
      let apiEvent = Object.freeze({
        request: event.request,
        httpServer: event.httpServer,
        clientAddress: event.clientAddress,
        locals: event.locals,
        params: apiHandler.params,
        env: event.env,
        $type: FETCH_EVENT,
        fetch: event.fetch
      });
      try {
        return await apiHandler.handler(apiEvent);
      } catch (error) {
        if (error instanceof Response) {
          return error;
        }
        return new Response(
          JSON.stringify({
            error: error.message
          }),
          {
            headers: {
              "Content-Type": "application/json"
            },
            status: 500
          }
        );
      }
    }
    return await forward(event);
  };
};

const server$ = (_fn) => {
  throw new Error("Should be compiled away");
};
async function parseRequest(event) {
  let request = event.request;
  let contentType = request.headers.get(ContentTypeHeader);
  let name = new URL(request.url).pathname, args = [];
  if (contentType) {
    if (contentType === JSONResponseType) {
      let text = await request.text();
      try {
        args = JSON.parse(
          text,
          (key, value) => {
            if (!value) {
              return value;
            }
            if (value.$type === "fetch_event") {
              return event;
            }
            return value;
          }
        );
      } catch (e) {
        throw new Error(`Error parsing request body: ${text}`);
      }
    } else if (contentType.includes("form")) {
      let formData = await request.clone().formData();
      args = [formData, event];
    }
  }
  return [name, args];
}
function respondWith(request, data, responseType) {
  if (data instanceof Response) {
    if (isRedirectResponse(data) && request.headers.get(XSolidStartOrigin) === "client") {
      let headers = new Headers(data.headers);
      headers.set(XSolidStartOrigin, "server");
      headers.set(XSolidStartLocationHeader, data.headers.get(LocationHeader) ?? "/");
      headers.set(XSolidStartResponseTypeHeader, responseType);
      headers.set(XSolidStartContentTypeHeader, "response");
      return new Response(null, {
        status: 204,
        statusText: "Redirected",
        headers
      });
    } else if (data.status === 101) {
      return data;
    } else {
      let headers = new Headers(data.headers);
      headers.set(XSolidStartOrigin, "server");
      headers.set(XSolidStartResponseTypeHeader, responseType);
      headers.set(XSolidStartContentTypeHeader, "response");
      return new Response(data.body, {
        status: data.status,
        statusText: data.statusText,
        headers
      });
    }
  } else if (data instanceof FormError) {
    return new Response(
      JSON.stringify({
        error: {
          message: data.message,
          stack: "",
          formError: data.formError,
          fields: data.fields,
          fieldErrors: data.fieldErrors
        }
      }),
      {
        status: 400,
        headers: {
          [XSolidStartResponseTypeHeader]: responseType,
          [XSolidStartContentTypeHeader]: "form-error"
        }
      }
    );
  } else if (data instanceof ServerError) {
    return new Response(
      JSON.stringify({
        error: {
          message: data.message,
          stack: ""
        }
      }),
      {
        status: data.status,
        headers: {
          [XSolidStartResponseTypeHeader]: responseType,
          [XSolidStartContentTypeHeader]: "server-error"
        }
      }
    );
  } else if (data instanceof Error) {
    console.error(data);
    return new Response(
      JSON.stringify({
        error: {
          message: "Internal Server Error",
          stack: "",
          status: data.status
        }
      }),
      {
        status: data.status || 500,
        headers: {
          [XSolidStartResponseTypeHeader]: responseType,
          [XSolidStartContentTypeHeader]: "error"
        }
      }
    );
  } else if (typeof data === "object" || typeof data === "string" || typeof data === "number" || typeof data === "boolean") {
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        [ContentTypeHeader]: "application/json",
        [XSolidStartResponseTypeHeader]: responseType,
        [XSolidStartContentTypeHeader]: "json"
      }
    });
  }
  return new Response("null", {
    status: 200,
    headers: {
      [ContentTypeHeader]: "application/json",
      [XSolidStartContentTypeHeader]: "json",
      [XSolidStartResponseTypeHeader]: responseType
    }
  });
}
async function handleServerRequest(event) {
  const url = new URL(event.request.url);
  if (server$.hasHandler(url.pathname)) {
    try {
      let [name, args] = await parseRequest(event);
      let handler = server$.getHandler(name);
      if (!handler) {
        throw {
          status: 404,
          message: "Handler Not Found for " + name
        };
      }
      const data = await handler.call(event, ...Array.isArray(args) ? args : [args]);
      return respondWith(event.request, data, "return");
    } catch (error) {
      return respondWith(event.request, error, "throw");
    }
  }
  return null;
}
const handlers = /* @__PURE__ */ new Map();
server$.createHandler = (_fn, hash, serverResource) => {
  let fn = function(...args) {
    let ctx;
    if (typeof this === "object") {
      ctx = this;
    } else if (sharedConfig.context && sharedConfig.context.requestContext) {
      ctx = sharedConfig.context.requestContext;
    } else {
      ctx = {
        request: new URL(hash, `http://localhost:${process.env.PORT ?? 3e3}`).href,
        responseHeaders: new Headers()
      };
    }
    const execute = async () => {
      try {
        return serverResource ? _fn.call(ctx, args[0], ctx) : _fn.call(ctx, ...args);
      } catch (e) {
        if (e instanceof Error && /[A-Za-z]+ is not defined/.test(e.message)) {
          const error = new Error(
            e.message + "\n You probably are using a variable defined in a closure in your server function."
          );
          error.stack = e.stack;
          throw error;
        }
        throw e;
      }
    };
    return execute();
  };
  fn.url = hash;
  fn.action = function(...args) {
    return fn.call(this, ...args);
  };
  return fn;
};
server$.registerHandler = function(route, handler) {
  handlers.set(route, handler);
};
server$.getHandler = function(route) {
  return handlers.get(route);
};
server$.hasHandler = function(route) {
  return handlers.has(route);
};
server$.fetch = internalFetch;

const inlineServerFunctions = ({ forward }) => {
  return async (event) => {
    const url = new URL(event.request.url);
    if (server$.hasHandler(url.pathname)) {
      let contentType = event.request.headers.get(ContentTypeHeader);
      let origin = event.request.headers.get(XSolidStartOrigin);
      let formRequestBody;
      if (contentType != null && contentType.includes("form") && !(origin != null && origin.includes("client"))) {
        let [read1, read2] = event.request.body.tee();
        formRequestBody = new Request(event.request.url, {
          body: read2,
          headers: event.request.headers,
          method: event.request.method,
          duplex: "half"
        });
        event.request = new Request(event.request.url, {
          body: read1,
          headers: event.request.headers,
          method: event.request.method,
          duplex: "half"
        });
      }
      let serverFunctionEvent = Object.freeze({
        request: event.request,
        clientAddress: event.clientAddress,
        locals: event.locals,
        fetch: event.fetch,
        $type: FETCH_EVENT,
        env: event.env
      });
      const serverResponse = await handleServerRequest(serverFunctionEvent);
      if (serverResponse) {
        let responseContentType = serverResponse.headers.get(XSolidStartContentTypeHeader);
        if (formRequestBody && responseContentType !== null && responseContentType.includes("error")) {
          const formData = await formRequestBody.formData();
          let entries = [...formData.entries()];
          return new Response(null, {
            status: 302,
            headers: {
              Location: new URL(event.request.headers.get("referer")).pathname + "?form=" + encodeURIComponent(
                JSON.stringify({
                  url: url.pathname,
                  entries,
                  ...await serverResponse.json()
                })
              )
            }
          });
        }
        return serverResponse;
      }
    }
    const response = await forward(event);
    return response;
  };
};

function renderAsync$1(fn, options) {
  return () => apiRoutes({
    forward: inlineServerFunctions({
      async forward(event) {
        let pageEvent = createPageEvent(event);
        let markup = await renderToStringAsync(() => fn(pageEvent), options);
        if (pageEvent.routerContext && pageEvent.routerContext.url) {
          return redirect(pageEvent.routerContext.url, {
            headers: pageEvent.responseHeaders
          });
        }
        markup = handleIslandsRouting(pageEvent, markup);
        return new Response(markup, {
          status: pageEvent.getStatusCode(),
          headers: pageEvent.responseHeaders
        });
      }
    })
  });
}
function createPageEvent(event) {
  let responseHeaders = new Headers({
    "Content-Type": "text/html"
  });
  const prevPath = event.request.headers.get("x-solid-referrer");
  const mutation = event.request.headers.get("x-solid-mutation") === "true";
  let statusCode = 200;
  function setStatusCode(code) {
    statusCode = code;
  }
  function getStatusCode() {
    return statusCode;
  }
  const pageEvent = {
    request: event.request,
    prevUrl: prevPath || "",
    routerContext: {},
    mutation,
    tags: [],
    env: event.env,
    clientAddress: event.clientAddress,
    locals: event.locals,
    $type: FETCH_EVENT,
    responseHeaders,
    setStatusCode,
    getStatusCode,
    $islands: /* @__PURE__ */ new Set(),
    fetch: event.fetch
  };
  return pageEvent;
}
function handleIslandsRouting(pageEvent, markup) {
  if (pageEvent.mutation) {
    pageEvent.routerContext.replaceOutletId = "outlet-0";
    pageEvent.routerContext.newOutletId = "outlet-0";
  }
  return markup;
}

const renderAsync = (fn, options) => composeMiddleware([apiRoutes, inlineServerFunctions, renderAsync$1(fn, options)]);

const entryServer = createHandler(renderAsync(event => createComponent(StartServer, {
  event: event
})));

export { entryServer as default };
