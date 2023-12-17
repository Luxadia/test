import { Typography } from '@mui/material';
import { DataGrid, GridToolbar, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { nlNL } from '@mui/x-data-grid';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];



export default function BasicExampleDataGrid() {
    const { data } = useDemoData({
        dataSet: 'Employee',
        visibleFields: VISIBLE_FIELDS,
        rowLength: 40,
    });

    return (
        <>
            <Typography variant="h3">Projecten</Typography>
            <div style={{ height: '100%', width: '100%' }}>
                <DataGrid
                    {...data}
                    disableDensitySelector
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                            printOptions: { disableToolbarButton: true },
                            csvOptions: { disableToolbarButton: true },
                        },
                    }}
                localeText={nlNL.components.MuiDataGrid.defaultProps.localeText} sx={{ border: 0, mt: 2 }} density='compact'  />
            </div>
        </>
    );
}