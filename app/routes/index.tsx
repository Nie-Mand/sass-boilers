import {
  Top,
  Main,
  Sidebar,
  SectionHeader,
  Table,
  Thead,
  Tbody,
  TR,
  TD,
  TH,
} from "~/core";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <Top />
      <Main className="flex flex-col lg:flex-row items-start space-y-3 lg:space-x-3">
        <Sidebar />
        <div className="flex-1 w-full lg:w-auto">
          <SectionHeader
            title="Audit log"
            subtitle="Activity across the chill-out-x19 organization."
          />

          <h4 className="font-bold text-xs">Showing All events</h4>

          <Table className="my-4">
            <Thead>
              <TH>Actor</TH>
              <TH>Action</TH>
              <TH>IP Address</TH>
              <TH>Date</TH>
            </Thead>
            <Tbody>
              <TR>
                <TD>Actor</TD>
                <TD>Action</TD>
                <TD>IP Address</TD>
                <TD>Date</TD>
              </TR>
              <TR>
                <TD>Actor</TD>
                <TD>Action</TD>
                <TD>IP Address</TD>
                <TD>Date</TD>
              </TR>
              <TR>
                <TD>Actor</TD>
                <TD>Action</TD>
                <TD>IP Address</TD>
                <TD>Date</TD>
              </TR>
              <TR>
                <TD>Actor</TD>
                <TD>Action</TD>
                <TD>IP Address</TD>
                <TD>Date</TD>
              </TR>
            </Tbody>
          </Table>
        </div>
      </Main>
    </div>
  );
}
