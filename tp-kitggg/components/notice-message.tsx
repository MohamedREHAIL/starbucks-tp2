"use client";

import { VariantProps, cva } from "class-variance-authority";
import { FC, ReactNode, memo } from "react";
import { WarningOctagon, CheckCircle } from "@phosphor-icons/react";

const labels = {
  error: "Erreur",
  success: "Succès",
};

const icons = {
  error: <WarningOctagon weight="regular" size={24} />,
  success: <CheckCircle weight="regular" size={24} />,
} satisfies Record<keyof typeof labels, ReactNode>;

const variants = cva(
  "my-6 rounded-lg p-4 flex flex-row gap-4 transition-colors border-2 cursor-pointer",
  {
    variants: {
      /**
       * Le type de la notice
       * @default error
       */
      type: {
        error:
          "bg-red-50 text-red-800 hover:bg-red-100 active:bg-red-200 border-red-800",
        success:
          "bg-green-50 text-green-800 hover:bg-green-100 active:bg-green-200 border-green-800",
      } satisfies Record<keyof typeof labels, string>,
    },
    defaultVariants: {
      type: "error",
    },
  }
);

export type NoticeMessageData = {
  message: ReactNode;
  type: keyof typeof labels;
};

type Props = VariantProps<typeof variants> & {
  /**
   * Le message a afficher dans la notice
   */
  message: ReactNode;
  /**
   * Fonction appelée lorsque l'utilisateur clic sur le message d'erreur pour le masquer
   * @returns 
   */
  onDismiss?: () => void;
  /**
   * Classes HTML additionnelles optionnelles
   */
  className?: string;
};

/**
 * Affiche un message d'état.
 * ### Exemple d'utilisation
 * ```tsx
 * const Example = () => {
 *  const [notices, setNotices] = useState<NoticeMessageData[]>([]);
 *
 *  function addError() {
 *    setNotices(n => [...n, { type: "error", message: "My message" }]);
 *  }
 * 
 *  function addSuccess() {
 *    setNotices(n => [...n, { type: "success", message: "My message" }]);
 *  }
 * 
 *  function removeNotice(index) {
 *    setNotices(n => {
 *      delete(n[index]);
 *      return Object.values(n);
 *    });
 *  }
 * 
 *  return <>
 *    <button onClick={addError}>Add Error</button>
 *    <button onClick={addSuccess}>Add Success</button>
 * 
 *    <h1>Notices</h1>
 *    <ul>
 *      {notices.map((notice, i) => <NoticeMessage
 *        key={i} 
 *        {...notice} 
 *        onDismiss={() => removeNotice(i)} 
 *      />)}
 *    </ul>
 *  </>;
 * }
 * ```
 */
const NoticeMessage: FC<Props> = memo(function ({
  onDismiss,
  message,
  className = "",
  ...props
}) {
  const type = props.type ?? "error";

  return (
    <div className={`${variants(props)} ${className}`} onClick={onDismiss}>
      {icons[type]}
      <div className="flex-1">
        <p className="uppercase text-xs">{labels[type]}</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
});

NoticeMessage.displayName = "NoticeMessage";
export { NoticeMessage };
