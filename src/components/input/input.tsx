import { defineComponent, computed } from "vue";
import type { PropType } from "vue";

export type InputSize = "small" | "medium" | "large";
export type InputType = "text" | "password" | "number" | "textarea";

export default defineComponent({
  name: "MyInput",
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String as PropType<InputType>,
      default: "text",
    },
    size: {
      type: String as PropType<InputSize>,
      default: "medium",
    },
    placeholder: {
      type: String,
      default: "请输入",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    maxLength: {
      type: Number,
      default: undefined,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    }
  },
  emits: ["update:modelValue", "change", "focus", "blur", "clear"],
  setup(props, { emit }) {
    const sizeClasses = computed(() => ({
      'text-sm h-8 px-2': props.size === 'small',
      'text-base h-10 px-3': props.size === 'medium',
      'text-lg h-12 px-4': props.size === 'large'
    }));

    const baseClasses = computed(() => [
      'w-full',
      'rounded-md',
      'border',
      'border-gray-300',
      'focus:border-blue-500',
      'focus:ring-1',
      'focus:ring-blue-500',
      'outline-none',
      'transition-all',
      'duration-200',
      sizeClasses.value[props.size as keyof typeof sizeClasses.value],
      {
        'bg-gray-100 cursor-not-allowed': props.disabled,
        'cursor-pointer': !props.disabled
      }
    ]);

    const handleInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      emit("update:modelValue", target.value);
    };

    const handleChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      emit("change", target.value);
    };

    const handleFocus = (event: FocusEvent) => {
      emit("focus", event);
    };

    const handleBlur = (event: FocusEvent) => {
      emit("blur", event);
    };

    const handleClear = () => {
      emit("update:modelValue", "");
      emit("clear");
    };

    return () => (
      <div class="relative inline-block w-full">
        {props.type === 'textarea' ? (
          <textarea
            value={props.modelValue}
            class={[...baseClasses.value, 'min-h-[100px] resize-y']}
            placeholder={props.placeholder}
            disabled={props.disabled}
            readonly={props.readonly}
            maxlength={props.maxLength}
            autofocus={props.autofocus}
            onInput={handleInput}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        ) : (
          <input
            type={props.type}
            value={props.modelValue}
            class={baseClasses.value}
            placeholder={props.placeholder}
            disabled={props.disabled}
            readonly={props.readonly}
            maxlength={props.maxLength}
            autofocus={props.autofocus}
            onInput={handleInput}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        )}
        {props.clearable && props.modelValue && !props.disabled && !props.readonly && (
          <span
            class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600"
            onClick={handleClear}
          >
            ×
          </span>
        )}
      </div>
    );
  },
});
