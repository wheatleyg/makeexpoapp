import React from "react";

import {
	Icon,
	IconElement,
	IconProps,
	TopNavigation,
	TopNavigationAction,
	TopNavigationActionProps,
} from "@ui-kitten/components";

const BackIcon = (props: IconProps): IconElement => <Icon {...props} name="arrow-back" />;

const BackAction = ((props: any): React.ReactElement => (
	<TopNavigationAction {...props} icon={BackIcon} />
)) as () => React.ReactElement;
export const TopNavigationShowcase = (): React.ReactElement => (
	<TopNavigation accessoryLeft={BackAction} title="Hello!" />
);
