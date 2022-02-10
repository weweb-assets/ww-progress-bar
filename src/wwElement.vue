<template>
    <div class="ww-progress-bar" :style="cssVariables">
        <div class="progression">
            <wwElement
                v-if="content.embedLabel && content.labelCentering === 'progress'"
                v-bind="content.progressionLabel"
                :ww-props="{ text: content.value }"
            />
        </div>
        <wwElement
            v-if="content.embedLabel && content.labelCentering === 'element'"
            v-bind="content.progressionLabel"
            :ww-props="{ text: content.value }"
        />
    </div>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true },
        uid: { type: String, required: true },
        wwElementState: { type: Object, required: true },
    },
    emits: ['update:content:effect', 'trigger-event'],
    setup(props) {
        const formatedValue = wwLib.wwUtils.getLengthUnit(props.content.value)[0] || 0;
        const { value: variableValue, setValue } = wwLib.wwVariable.useComponentVariable(
            props.uid,
            'value',
            formatedValue === undefined ? 0 : formatedValue
        );
        return { variableValue, setValue };
    },
    computed: {
        value() {
            return this.variableValue;
        },
        cssVariables() {
            const unitValue = wwLib.wwUtils.getLengthUnit(this.content.value)[0] || 0;
            return {
                '--progression': `${unitValue}%`,
                '--selector-color': this.content.progressBarColor,
            };
        },
    },
    watch: {
        'content.value'(newValue) {
            newValue = wwLib.wwUtils.getLengthUnit(this.content.value)[0] || 0;
            if (newValue === this.value) return;
            this.setValue(newValue);
            this.$emit('trigger-event', { name: 'initValueChange', event: { value: newValue } });
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
