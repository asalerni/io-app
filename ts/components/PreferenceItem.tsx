import { Left, Right, Text } from "native-base";
import * as React from "react";
import { StyleSheet } from "react-native";

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "native-base/src/utils/mapPropsToStyleNames";

import IconFont from "../components/ui/IconFont";
import variables from "../theme/variables";
import H5 from "./ui/H5";

interface BaseProps {
  title: string;
  valuePreview: string;
}

interface ValueProps extends BaseProps {
  kind: "value";
  icon: string;
}

interface ActionProps extends BaseProps {
  kind: "action";
}

type Props = ValueProps | ActionProps;

const styles = StyleSheet.create({
  title: {
    fontWeight: "700"
  }
});

/**
 * Renders a single item in the preferences screen
 */
class PreferenceItem extends React.Component<Props> {
  public render() {
    const { title, valuePreview } = this.props;

    return (
      <React.Fragment>
        <Left>
          <H5 style={styles.title}>{title}</H5>
          <Text>{valuePreview}</Text>
        </Left>
        <Right>
          {this.props.kind === "value" ? (
            <IconFont name={this.props.icon} size={variables.iconSize6} />
          ) : this.props.kind === "action" ? (
            <IconFont name="io-right" />
          ) : null}
        </Right>
      </React.Fragment>
    );
  }
}

export default connectStyle(
  "UIComponent.PreferenceItem",
  {},
  mapPropsToStyleNames
)(PreferenceItem);
