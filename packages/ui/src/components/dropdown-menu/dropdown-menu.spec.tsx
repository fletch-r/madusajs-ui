import { render, screen } from "@testing-library/react"
import * as React from "react"

import { DropdownMenu } from "./dropdown-menu"
import { Button } from "../button"

describe("DropdownMenu", () => {
    it("renders a dropdown-menu", () => {
        render(
            <DropdownMenu>
                <DropdownMenu.Trigger asChild>
                    <Button variant="secondary" format={"icon"}>
                        Button
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="w-[300px]">
                    <DropdownMenu.RadioGroup>
                        <DropdownMenu.RadioItem value="none">
                            No Sorting
                        </DropdownMenu.RadioItem>
                        <DropdownMenu.Separator />
                        <DropdownMenu.RadioItem value="alpha">
                            Alphabetical
                            <DropdownMenu.Hint>A-Z</DropdownMenu.Hint>
                        </DropdownMenu.RadioItem>
                        <DropdownMenu.RadioItem value="alpha-reverse">
                            Reverse Alphabetical
                            <DropdownMenu.Hint>Z-A</DropdownMenu.Hint>
                        </DropdownMenu.RadioItem>
                        <DropdownMenu.RadioItem value="asc">
                            Created At - Ascending
                            <DropdownMenu.Hint>1 - 30</DropdownMenu.Hint>
                        </DropdownMenu.RadioItem>
                        <DropdownMenu.RadioItem value="desc">
                            Created At - Descending
                            <DropdownMenu.Hint>30 - 1</DropdownMenu.Hint>
                        </DropdownMenu.RadioItem>
                    </DropdownMenu.RadioGroup>
                </DropdownMenu.Content>
            </DropdownMenu>
        )

        expect(screen.getByRole("dropdown-menu")).toBeInTheDocument()
    })
})
