import React from "react";
import clsx from "clsx"

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode
}

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
    ({
        as: Compo = "section", className, children, ...restProps
    }, ref) => {
        return (
        <Compo ref={ref} className={clsx("px-4 py-10 md:px-4 md:py-14 lg:py-16", className)}
        {...restProps}>
            <div className="mx-auto w-full max-w-7xl">
                {children}
            </div>
        </Compo>
        )
    }
)

Bounded.displayName = "Bounded"

export default Bounded