
import { Text, Layout, Button, Radio, RadioGroup } from "@ui-kitten/components";
import { Link } from "expo-router";
import React from "react";

export default function Index() {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    return (
        <Layout
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 16,
            }}
        >
            {/* Regular text */}
            <Text category="h5">Hello, Worldaaa</Text>

            <Text category="s1" style={{ fontStyle: "italic", marginVertical: 8 }}>
                Italic text!
            </Text>

            <Link
                href="/about"
                style={{
                    color: "#3366FF",
                    textDecorationLine: "underline",
                    marginTop: 12,
                }}
            >
                About
            </Link>
            <br/>
            <Button> My Button </Button>
            <br/>
            <Text category="s2">Your selection: {selectedIndex} </Text>
            <RadioGroup
                selectedIndex={selectedIndex}
                onChange={index => setSelectedIndex(index)}
            >
                <Radio>
                    First Checkbox (0)
                </Radio>
                <Radio>
                    Second Checkbox (1)
                </Radio>
                <Radio
                status="danger">
                    Scary Checkbox (2)
                </Radio>
            </RadioGroup>

        </Layout>
    );
}
