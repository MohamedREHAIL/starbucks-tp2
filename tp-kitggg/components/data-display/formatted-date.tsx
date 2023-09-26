import { FC, memo, useMemo } from "react";

type Props = {
  /**
   * La date à afficher
   */
  date: Date | string | number;
}

/**
 * Formate une instance `Date` donnée pour qu'elle s'affiche au format `DD/MM/YYYY à HH:mm:ss`
 */
const FormattedDate: FC<Props> = memo(function({date}) {
  const formattedDate = useMemo(() => {
    if (!(date instanceof Date))
      date = new Date(date);
    
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} à ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
  }, [date]);
  return <>{formattedDate}</>;
});

FormattedDate.displayName = "FormattedDate";
export {FormattedDate};