
import {
    Text,
    Layout,
    Button,
    Radio,
    RadioGroup,
    BottomNavigation,
    BottomNavigationTab,
    Icons,
    IconProps,
    IconElement,
    Icon
} from "@ui-kitten/components";
import { Link } from "expo-router";
import React from "react";

export default function Index() {

    const [radioIndex, setRadioIndex] = React.useState(0);
    const [tabIndex, setTabIndex] = React.useState(0);




    return (
        <Layout style ={{
            flex: 1,
        }}>
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
                    gap: 10,
                }}
            >
                About
            </Link>

            <Button style={{marginBottom: 20, marginTop: 20}}> My Button </Button>

            <Text style={{marginTop: 10}} category="s2">Your selection: {radioIndex} </Text>
            <RadioGroup
                selectedIndex={radioIndex}
                onChange={index => setRadioIndex(index)}
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
            <BottomNavigation
            appearance = 'noIndicator'
            selectedIndex={tabIndex}
            onSelect={index => setTabIndex(index)}>
                <BottomNavigationTab title='USERS' />
                <BottomNavigationTab title='ORDERS' />
                <BottomNavigationTab title='TRANSACTIONS' />

            </BottomNavigation>

        </Layout>
    );
}
