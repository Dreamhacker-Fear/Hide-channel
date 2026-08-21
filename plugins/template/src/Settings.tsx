import { Forms } from "@vendetta/ui/components";
import { storage } from "@vendetta/plugin";
import { React } from "@vendetta/metro/common";

const { FormText, FormSection } = Forms;

export default () => {
    const [, refresh] = React.useState(0);
    const hidden: string[] = storage.hiddenChannels ?? [];

    return (
        <FormSection title="Hide Channels">
            <FormText>
                Hidden channels: {hidden.length}
            </FormText>

            <FormText>
                Channel IDs:
                {"\n\n"}
                {hidden.length
                    ? hidden.join("\n")
                    : "No channels hidden."}
            </FormText>
        </FormSection>
    );
};
