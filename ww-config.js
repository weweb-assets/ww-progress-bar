export default {
    editor: {
        label: {
            en: 'Progress bar',
            fr: 'Progress bar',
        },
        // Some Font Awesome icons missing : https://fontawesome.com/icons/bars-progress?s=regular
        // icon: 'fontawesome/regular/bars-progress',
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
        label: {
            label: {
                en: 'Label',
                fr: 'Label',
            },
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'element', label: { en: 'Element' } },
                    { value: 'progress', label: { en: 'Progression' } },
                    { value: 'none', label: { en: 'None' } },
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
