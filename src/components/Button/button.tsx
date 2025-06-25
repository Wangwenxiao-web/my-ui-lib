import { defineComponent } from "vue";
import type { PropType } from "vue";

export type ButtonType = "primary" | "default" | "danger";

export default defineComponent({
  name: "MyButton",
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
  setup(props, { slots, emit }) {
    const base =
      "px-4 py-2 rounded text-white transition-colors duration-200 text-sm font-medium";

    const types: Record<ButtonType, string> = {
      primary: "bg-blue-500 hover:bg-blue-600",
      default: "bg-gray-500 hover:bg-gray-600",
      danger: "bg-red-500 hover:bg-red-600",
    };

    return () => (
      <button
        class={`${base} ${types[props.type]} ${
          props.disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={props.disabled}
        onClick={() => emit("click")}
      >
        {slots.default ? slots.default() : "Button"}
      </button>
    );
  },
});
