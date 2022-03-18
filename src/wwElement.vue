<template>
    <div class="ww-progress-bar" :style="cssVariables">
        <div class="progression">
            <wwElement
                v-if="content.embedLabel && content.label === 'progress'"
                v-bind="content.progressionLabel"
                :ww-props="{ text: `${variableValue}%` }"
            />
        </div>
        <wwElement
            v-if="content.embedLabel && content.label === 'element'"
            v-bind="content.progressionLabel"
            :ww-props="{ text: `${variableValue}%` }"
        />
    </div>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true },
        uid: { type: String, required: true },
        wwElementState: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    emits: ['update:content:effect', 'trigger-event'],
    setup(props) {
        const { value: variableValue, setValue } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid,
            name: 'value',
            defaultValue: props.content.value,
            sanitizer: value => {
                const parsedValue = parseInt(value || 0)
                return isNaN(val) ? 0 : val
            }
        });
        return { variableValue, setValue };
    },
    computed: {
        cssVariables() {
            return {
                '--progression': `${this.variableValue}%`,
                '--selector-color': this.content.progressBarColor,
            };
        },
    },
    watch: {
        'content.value'(value) {
            const { newValue, hasChanged } = this.setValue(value);
            if (hasChanged) {
                this.$emit('trigger-event', { name: 'initValueChange', event: { value: newValue } });
            }
        },
        'content.label'(label) {
            if (label === 'none') {
                this.$emit('update:content:effect', { progressionLabel: null });
            } else {
                this.createLabelElement();
            }
        },
    },
    methods: {
        async createLabelElement() {
            if (this.wwEditorState.isACopy) return;
            if (this.content.progressionLabel !== null) return;
            const progressionLabel = await wwLib.createElement('ww-text');
            this.$emit('update:content:effect', { progressionLabel });
        },
    },
};
</script>

<style lang="scss" scoped>
.ww-progress-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: inherit;
    box-sizing: content-box;
    position: relative;
    border: inherit;
    border-radius: inherit;
    transition: inherit;
    height: inherit;
    width: inherit;
    overflow: hidden;

    .progression {
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        width: var(--progression);
        background: var(--selector-color);
        border-radius: inherit;
        transition: inherit;
    }
}
</style>
