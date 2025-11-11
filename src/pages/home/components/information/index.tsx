/**
 * Represents the props accepted by the `InfoItem` component.
 *
 * @interface IInfoItemProps
 * @property {string} title - The text to be displayed inside the table row.
 */
interface IInfoItemProps {
  title: string;
}

/**
 * @component InfoItem
 * @description
 * Functional component that renders an informational table row displaying a title across all columns.
 *
 * This component is typically used to show section titles, subtitles,
 * or messages that span multiple columns within a table.
 *
 * @param {IInfoItemProps} props - The component props.
 * @param {string} props.title - The text displayed within the row.
 */
const InfoItem = ({ title }: IInfoItemProps) => {
  return (
    <tr>
      <td colSpan={4}>
        <p>{title}</p>
      </td>
    </tr>
  );
};

export default InfoItem;
