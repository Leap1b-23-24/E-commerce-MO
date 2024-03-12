type CustomInputProps = {
  label: string;
  type: string;
  placeholder: string;
};
export const CustomInput = (props: CustomInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-base font-normal text-gray-200">{props.label}</p>
      <input
        className="px-2 py-4 border border-[#D6D8DB] rounded-lg bg-[#F7F7F8]"
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  );
};
