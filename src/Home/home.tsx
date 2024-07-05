import { TextInput, ActionIcon, rem, Center, Checkbox, Slider } from "@mantine/core"
import { IconRefresh, IconCopy } from '@tabler/icons-react';
import { useState } from 'react'
import "./home.css"
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";


function generatePassword(uppers: boolean = true, numbers: boolean = true, symbols: boolean = true, len: number = 8) {
    function random_item(items: any[]) {
        return items[Math.floor(Math.random() * items.length)]
    }
    function random_bool(chance: number = 50) {
        return Math.floor(Math.random() * 100) < chance
    }
    function random_letter(uppers: boolean = true) {
        const letters = "abcdefghijklmnopqrstuvwxyz".split("");
        return uppers ? ((Math.random() * 100 < 50) ? random_item(letters).toUpperCase() : random_item(letters)) : random_item(letters)
    }
    function random_symbol() {
        return random_item("!@#$%^&*()".split(""))
    }
    function random_number() {
        return Math.floor(Math.random() * 10)
    }

    let password = ""

    for (let i = 0; i < len; i++) {
        password += (random_bool(50) ? random_letter(uppers) :
            (random_bool(50) && numbers ? random_number() :
                (symbols ? random_symbol() : random_letter(uppers))))
    }

    return password
}

function OptionsCheckBox({label, onClick, checked} : {label:string, onClick:any, checked:boolean}){
    return (
        <div className="checkItem">
        <Checkbox checked={checked} label={label} color="orange" radius="xl" onClick={onClick}  />
        </div>
    )
}

export function Home() {
    const [uppers, setUppers] = useState(true)
    const [numbers, setNumbers] = useState(true)
    const [symbols, setSymbols] = useState(true)
    const [len, setLen] = useState(10)
    const [password, setPassword] = useState(generatePassword(uppers, numbers, symbols, len))

    return (
        <Center>
            <div className="parent">
                <div className="password-new-copy">
                    <TextInput
                        radius="xl"
                        size="md"
                        value={password + `       ${password.length}`}
                        onChange={(e) => setPassword(e.target.value)}
                        rightSectionWidth={84}
                        rightSection={
                            <div style={{ display: 'flex', gap: rem(8) }}> {/* Adjust gap as needed */}
                                <ActionIcon size={32} radius="xl" color={"orange"} variant="filled" onClick={() => setPassword(generatePassword(uppers, numbers, symbols, len))}>
                                    <IconRefresh style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                                </ActionIcon>
                                <ActionIcon size={32} radius="xl" color={"orange"} variant="filled">
                                    <IconCopy style={{ width: rem(18), height: rem(18) }} stroke={1.5} onClick={() => navigator.clipboard.writeText(password)} />
                                </ActionIcon>
                            </div>
                        }
                    />
                </div>
                <div className="body">
                    <div className="length">
                        <Slider
                         labelAlwaysOn
                         step={1}
                         value={len} 
                         marks={[
                            {value:8, label:'8'},
                            {value:16, label:'16'},
                            {value:24, label:'24'},
                            {value:32, label:'32'},
                        ]}
                        min={8}
                        max={32}
                        onChange={(e) => {
                            setLen(Math.floor(parseInt(""+e)));
                        }} 
                        />
                    </div>
                    <div className="checkboxes">
                            <OptionsCheckBox checked={uppers} label="Uppercase" onClick={() => setUppers(!uppers)}  />
                            <OptionsCheckBox checked={numbers} label="Numbers" onClick={() => setNumbers(!numbers)} />
                            <OptionsCheckBox checked={symbols} label="symbols" onClick={() => setSymbols(!symbols)} />
                    </div>
                </div>
                <ColorSchemeToggle />
            </div>
        </Center>)
}