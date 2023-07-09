import { XMark } from "@medusajs/icons"
import * as Primitives from "@radix-ui/react-dialog"
import * as React from "react"

import { Badge } from "@/components/badge"
import { Button } from "@/components/button"
import { Header } from "@/components/header"
import { clx } from "@/utils/clx"
import { Text } from "../text"

const Modal = Primitives.Root
Modal.displayName = "Modal"

const ModalTrigger = Primitives.Trigger
ModalTrigger.displayName = "ModalTrigger"

const ModalClose = Primitives.Close
ModalClose.displayName = "ModalClose"

const ModalPortal = ({ className, ...props }: Primitives.DialogPortalProps) => {
  return <Primitives.DialogPortal className={clx(className)} {...props} />
}

const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof Primitives.Overlay>,
  React.ComponentPropsWithoutRef<typeof Primitives.Overlay>
>(({ className, ...props }, ref) => {
  return (
    <Primitives.Overlay
      ref={ref}
      className={clx("fixed inset-0 z-50 backdrop-blur-sm", className)}
      {...props}
    />
  )
})
ModalOverlay.displayName = "ModalOverlay"

const ModalContent = React.forwardRef<
  React.ElementRef<typeof Primitives.Content>,
  React.ComponentPropsWithoutRef<typeof Primitives.Content>
>(({ className, ...props }, ref) => {
  return (
    <ModalPortal>
      <ModalOverlay />
      <Primitives.Content
        ref={ref}
        className={clx(
          "bg-base shadow-elevation-modal fixed left-[50%] top-[50%] z-50 flex h-full max-h-[560px] w-full max-w-[560px] translate-x-[-50%] translate-y-[-50%] flex-col rounded-lg border",
          className
        )}
        {...props}
      />
    </ModalPortal>
  )
})
ModalContent.displayName = "ModalContent"

const ModalHeader = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="border-ui-border-base flex items-start justify-between gap-x-4 border-b px-8 py-6"
      {...props}
    >
      <div className={clx("flex flex-col gap-y-1", className)}>{children}</div>
      <div className="flex items-center gap-x-2">
        <Badge size={"sm"} color={"grey"}>
          esc
        </Badge>
        <ModalClose asChild>
          <Button variant="transparent" size={"sm"} format={"icon"}>
            <XMark />
          </Button>
        </ModalClose>
      </div>
    </div>
  )
}
ModalHeader.displayName = "ModalHeader"

const ModalBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={clx("flex-1", className)} {...props} />
}
ModalBody.displayName = "ModalBody"

const ModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clx(
        "border-ui-border-base flex items-center justify-end space-x-2 overflow-y-scroll border-t px-8 pb-6 pt-4",
        className
      )}
      {...props}
    />
  )
}
ModalFooter.displayName = "ModalFooter"

const ModalTitle = React.forwardRef<
  React.ElementRef<typeof Primitives.Title>,
  React.ComponentPropsWithoutRef<typeof Primitives.Title>
>(({ className, children, ...props }, ref) => (
  <Primitives.Title ref={ref} className={clx(className)} asChild {...props}>
    <Header level="h1">{children}</Header>
  </Primitives.Title>
))
ModalTitle.displayName = "ModalTitle"

const ModalDescription = React.forwardRef<
  React.ElementRef<typeof Primitives.Description>,
  React.ComponentPropsWithoutRef<typeof Primitives.Description>
>(({ className, children, ...props }, ref) => (
  <Primitives.Description
    ref={ref}
    className={clx(className)}
    asChild
    {...props}
  >
    <Text>{children}</Text>
  </Primitives.Description>
))
ModalDescription.displayName = "ModalDescription"

export {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
}
