export default {
    editor: {
        label: {
            en: 'Progress bar',
            fr: 'Progress bar',
        },
        icon: 'fontawesome/solid/toggle-on',
    },
    triggerEvents: [
        { name: 'change', label: { en: 'On change' }, event: { value: '' } },
        { name: 'initValueChange', label: { en: 'On init value change' }, event: { value: '' } },
    ],
    properties: {
        value: {
            type: 'Number',
            label: {
                en: 'Init value',
            },
            options: {
                min: 0,
                max: 100,
                step: 1,
            },
            defaultValue: undefined,
            bindable: true,
        },
        progressBarColor: {
            type: 'Color',
            label: {
                en: 'Progress bar color',
                fr: 'Couleur de la progress bar',
            },
            options: {
                nullable: true,
                gradient: true,
            },
        },
        embedLabel: {
            type: 'OnOff',
            label: {
                en: 'Embed label',
                fr: 'Label intégré',
            },
            section: 'settings',
            defaultValue: true,
        },
        labelCentering: {
            label: {
                en: 'Label centered on',
                fr: 'Label centered on',
            },
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'element', label: { en: 'Element' } },
                    { value: 'progress', label: { en: 'Progression' } },
                ],
            },
            defaultValue: 'progress',
        },
        progressionLabel: {
            hidden: true,
            defaultValue: { isWwObject: true, type: 'ww-text' },
        },
    },
};
