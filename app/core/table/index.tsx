interface TableProps {
  children: React.ReactNode;
  className?: string;
}

export function Table({ children, className }: TableProps) {
  return (
    <table
      className={`border-separate border-spacing-0 w-full ${className ?? ""}`}
    >
      {children}
    </table>
  );
}

interface HeaderProps {
  children: React.ReactNode;
}

export function Thead({ children }: HeaderProps) {
  return (
    <thead className="w-full text-xs">
      <tr className="w-full ">{children}</tr>
    </thead>
  );
}
Table.Thead = Thead;

interface TDProps {
  children: React.ReactNode;
  className?: string;
}
export function TD({ children, className }: TDProps) {
  return (
    <td className={`px-4 py-5 border-b ${className ?? ""}`}>{children}</td>
  );
}
Table.TD = TD;

interface THProps {
  children: React.ReactNode;
  className?: string;
}

export function TH({ children, className }: THProps) {
  return (
    <th
      className={`
      px-4 py-2 text-left font-semibold text-gray-700
      border-y border-gray-100 bg-gray-50
      first:rounded-l-md first:border-l 
      last:rounded-r-md last:border-r
         ${className ?? ""}`}
    >
      {children}
    </th>
  );
}
Table.TH = TH;

interface TRProps {
  children: React.ReactNode;
  className?: string;
}
export function TR({ children, className }: TRProps) {
  return <tr className={`${className ?? ""}`}>{children}</tr>;
}
Table.TR = TR;

interface BodyProps {
  children: React.ReactNode;
}

export function Tbody({ children }: BodyProps) {
  return <tbody className="w-full text-xs">{children}</tbody>;
}
Table.Tbody = Tbody;
