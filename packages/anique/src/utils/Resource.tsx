import {JSX, Resource, ResourceActions, Suspense} from "solid-js";
import {Spinner} from "../spinner";
import {Alert, AlertType} from "../alert";
import {Button} from "../button";

export function DisplayResource<T>(props: {
    resource: Resource<T>,
    actions?: ResourceActions<T>,
    children: JSX.Element
}) {
    return (
        <Suspense fallback={<Spinner/>}>
            <Spinner
                style={{
                    display: props.resource.state === "pending" ? "block" : "none"
                }}
            />
            {props.resource.state === "ready" ? props.children : props.resource.state === "errored" ? (
                <Alert type={AlertType.Error}>
                    {props.resource.error}
                    {props.actions ? (
                        <Button onClick={() => props.actions!.refetch()}>Refresh</Button>
                    ) : null}
                </Alert>
            ) : null}
        </Suspense>
    )
}