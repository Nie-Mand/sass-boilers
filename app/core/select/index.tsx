import * as RadixSelect from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

interface Option {
  value: string;
  label: string;
  onClick?: () => void;
}

interface GroupOfOptions {
  label?: string;
  options: Option[];
}

interface SelectProps {
  placeholder?: string;
  options?: Option[];
  groupedOptions?: GroupOfOptions[];
  contentClassName?: string;
}

// all: "unset",
//   display: "inline-flex",
//   alignItems: "center",
//   justifyContent: "center",
//   borderRadius: 4,
//   padding: "0 15px",
//   fontSize: 13,
//   lineHeight: 1,
//   height: 35,
//   gap: 5,
//   backgroundColor: "white",
//   color: violet.violet11,
//   boxShadow: `0 2px 10px ${blackA.blackA7}`,
//   "&:hover": { backgroundColor: mauve.mauve3 },
//   "&:focus": { boxShadow: `0 0 0 2px black` },
//   "&[data-placeholder]": { color: violet.violet9 },

// const StyledItem = styled(SelectPrimitive.Item, {

//     "&[data-disabled]": {
//       color: mauve.mauve8,
//       pointerEvents: "none",
//     },

//     "&[data-highlighted]": {
//       backgroundColor: violet.violet9,
//       color: violet.violet1,
//     },
//   });

function Options({ options }: { options: Option[] }) {
  return (
    <>
      {options.map((option) => (
        <RadixSelect.Item
          value={option.value}
          key={option.value}
          className={`
                text-sm rounded-sm text-gray-600 flex items-center px-8 h-9 relative select-none
                outline-none focus:outline-none cursor-pointer hover:bg-gray-100 duration-200
                `}
          onClick={option.onClick}
        >
          <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
          <RadixSelect.ItemIndicator
            className={`
                absolute left-0 w-6 inline-flex items-center justify-center
                `}
          >
            <CheckIcon />
          </RadixSelect.ItemIndicator>
        </RadixSelect.Item>
      ))}
    </>
  );
}

function GroupedOptions({ groups }: { groups: GroupOfOptions[] }) {
  return (
    <>
      {groups.map((group, idx) => (
        <span key={group.label + idx.toString()}>
          <RadixSelect.Group>
            {group.label ? (
              <RadixSelect.Label className={`text-xs px-4 py-2 text-gray-400`}>
                {group.label}
              </RadixSelect.Label>
            ) : null}
            <Options options={group.options} />
          </RadixSelect.Group>
          {idx !== groups.length - 1 && (
            <RadixSelect.Separator className={`h-px bg-gray-100 m-1`} />
          )}
        </span>
      ))}
    </>
  );
}

export function Select({
  contentClassName,
  placeholder,
  options,
  groupedOptions,
}: SelectProps) {
  return (
    <Dropdown
      groupedOptions={groupedOptions}
      options={options}
      contentClassName={contentClassName}
    >
      <span
        className={`
        inline-flex items-center justify-center rounded-md px-4 h-9 text-sm
        gap-2 bg-white border text-gray-400 hover:bg-gray-50 duration-200 
        focus:!outline-none focus:ring focus:ring-indigo-400 focus:ring-opacity-50
      `}
      >
        <RadixSelect.Value placeholder={placeholder ?? "Select something…"} />
        <RadixSelect.Icon className="text-[10px]">
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </span>
    </Dropdown>
  );
}

interface DropdownProps {
  children: React.ReactNode;
  options?: Option[];
  groupedOptions?: GroupOfOptions[];
  contentClassName?: string;
}

export function Dropdown({
  contentClassName,
  children,
  options,
  groupedOptions,
}: DropdownProps) {
  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger className="focus:!outline-none">
        <RadixSelect.Value>{children}</RadixSelect.Value>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className={contentClassName ?? ""}>
          <RadixSelect.ScrollUpButton>
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>

          <RadixSelect.Viewport className="bg-white py-1 shadow rounded-md">
            {options ? <Options options={options} /> : null}
            {groupedOptions ? <GroupedOptions groups={groupedOptions} /> : null}
          </RadixSelect.Viewport>

          <RadixSelect.ScrollDownButton>
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}
