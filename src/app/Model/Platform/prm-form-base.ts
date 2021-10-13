import { Observable, of } from "rxjs";

export class PrmFormBase<T> {
    // Mandatory input configuration
    label: string;
    key: string;
    type: string; // Text, Number, Select, DatePicker, nestedFormGroup
    // Set input value
    value: T | undefined;
    // HTML & Form handling
    required: boolean;
    order: number;
    size: number;
    inputMode: string;
    mask: string;
    placeholder: string;
    nestedQuestions: PrmFormBase<string>[]; // Only if "nestedFormGroup" type
    options: { label: string, value: string }[];// | any[]; // Only if "select" type { key: string, value: string }
    // Function handler
    onInputInit: Function
    onChange: Function;
    onKeyUp: Function;
    onKeyDown: Function;
    onClick: Function;

    constructor(options: {
        label?: string;
        key?: string;
        type?: string;
        value?: T;
        // HTML & Form handling
        required?: boolean;
        order?: number;
        size?: number;
        inputMode?: string;
        mask?: string;
        placeholder?: string;
        nestedQuestions?: PrmFormBase<string>[];
        options?: { label: string, value: string }[];
        // Function Handler
        onInputInit?: Function;
        onChange?: Function;
        onKeyUp?: Function;
        onKeyDown?: Function;
        onClick?: Function;
    } = {}) {
        this.label = options.label || '';
        this.key = options.key || '';
        this.type = options.type || 'text';
        this.value = options.value;
        // HTML & Form handling
        this.required = !!options.required || false;
        this.order = options.order === undefined ? 1 : options.order;
        this.size = options.size && (options.size > 0 && options.size < 13) ? options.size : 12;
        this.inputMode = options.inputMode ? options.inputMode : this.defaultInputMode(options.type);
        this.mask = options.mask || '';
        this.placeholder = options.placeholder || '';
        this.nestedQuestions = options.nestedQuestions || [];
        this.options = options.options || [];
        // Function handler
        this.onInputInit = options.onInputInit || (function (response: any = {}) { });
        this.onChange = options.onChange || (function (response: any = {}) { });
        this.onKeyUp = options.onKeyUp || (function (response: any = {}) { });
        this.onKeyDown = options.onKeyDown || (function (response: any = {}) { });
        this.onClick = options.onClick || (function (response: any = {}) { });
    }

    defaultInputMode(type: string | undefined): string {
        let responseValue: string;
        switch (type) {
            case "number":
                responseValue = "numeric";
                break;

            default:
                responseValue = "text"
                break;
        }
        return responseValue;
    }
}