import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { Button } from "@material-ui/core";
import CreateRfpPopUp from "../../createrfppopup/createrfppopup";
import { useDispatch, useSelector } from "react-redux";
import { setAddCreatRfpPopUp } from "../../../redux/feature/popup.feature";

function createData(
  id,
  category,
  subcat,
  quantity,
  status,
  releasedate,
  closerdate,
  description,
  vendors
) {
  return {
    id,
    category,
    subcat,
    quantity,
    status,
    releasedate,
    closerdate,
    description,
    vendors,
  };
}

const rows = [
  createData(
    "#654",
    "Electronics",
    "Monitors",
    "98 Pics",
    "Open",
    "12/11/2022",
    "12/12/2022",
    "Need 98 Pcs of Dell Brand Monitors",
    6
  ),
  createData(
    "#655",
    "Food & Health",
    "Package Drinking Water",
    "12 Pics",
    "Pending",
    "12/11/2022",
    "12/12/2022",
    "Need 12 Pcs of Package Drinking Water",
    10
  ),
  createData(
    "#656",
    "Electronics",
    "Mouse and Keyboards",
    "12 Pics",
    "Pending",
    "12/11/2022",
    "12/12/2022",
    "Need 12 Pcs of Dell Brand Mouse and Keyboards",
    10
  ),
  createData(
    "#658",
    "Furniture",
    "Working Desk",
    "11 Pics",
    "Closed",
    "12/11/2022",
    "12/12/2022",
    "Need 11 Pcs of Working Desk",
    7
  ),
  createData(
    "#659",
    "Office Supply",
    "Office Stationery",
    "9 Pics",
    "Closed",
    "12/11/2022",
    "12/12/2022",
    "Need 9 Pcs of sticky note pad 10 pen stand, 2 Nos of papper",
    "6"
  ),
  createData(
    "#660",
    "Office Supply",
    "Office Stationery",
    "9 Pics",
    "Closed",
    "12/11/2022",
    "12/12/2022",
    "Need 9 Pcs of sticky note pad 10 pen stand, 2 Nos of papper",
    "6"
  ),
  createData(
    "#661",
    "Office Supply",
    "Office Stationery",
    "9 Pics",
    "Closed",
    "12/11/2022",
    "12/12/2022",
    "Need 9 Pcs of sticky note pad 10 pen stand, 2 Nos of papper",
    "6"
  ),
  createData(
    "#661",
    "Office Supply",
    "Office Stationery",
    "9 Pics",
    "Closed",
    "12/11/2022",
    "12/12/2022",
    "Need 9 Pcs of sticky note pad 10 pen stand, 2 Nos of papper",
    "6"
  ),
  createData(
    "#662",
    "Office Supply",
    "Office Stationery",
    "9 Pics",
    "Closed",
    "12/11/2022",
    "12/12/2022",
    "Need 9 Pcs of sticky note pad 10 pen stand, 2 Nos of papper",
    "6"
  ),
  createData(
    "#663",
    "Office Supply",
    "Office Stationery",
    "9 Pics",
    "Closed",
    "12/11/2022",
    "12/12/2022",
    "Need 9 Pcs of sticky note pad 10 pen stand, 2 Nos of papper",
    "6"
  ),
  createData(
    "#664",
    "Office Supply",
    "Office Stationery",
    "9 Pics",
    "Closed",
    "12/11/2022",
    "12/12/2022",
    "Need 9 Pcs of sticky note pad 10 pen stand, 2 Nos of papper",
    "6"
  ),
  //   createData('#660','Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('#661','Jelly Bean', 375, 0.0, 94, 0.0),
  //   createData('#662','KitKat', 518, 26.0, 65, 7.0),
  //   createData('#663','Lollipop', 392, 0.2, 98, 0.0),
  //   createData('#664','Marshmallow', 318, 0, 81, 2.0),
  //   createData('#665','Nougat', 360, 19.0, 9, 37.0),
  //   createData('#667','Oreo', 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// const headCells = [
//   {
//     id: "id",
//     numeric: false,
//     disablePadding: true,
//     label: "#ID",
//   },
//   {
//     id: "category",
//     numeric: true,
//     disablePadding: false,
//     label: "Category",
//   },
//   {
//     id: "subcategory",
//     numeric: true,
//     disablePadding: false,
//     label: "Sub-Category",
//   },
//   {
//     id: "Quantity",
//     numeric: true,
//     disablePadding: false,
//     label: "Quantity",
//   },
//   {
//     id: "status",
//     numeric: true,
//     disablePadding: false,
//     label: "Status",
//   },
//   {
//     id: "releasedate",
//     numeric: true,
//     disablePadding: false,
//     label: "Release Date",
//   },
//   {
//     id: "closerdate",
//     numeric: true,
//     disablePadding: false,
//     label: "Closer Date",
//   },
//   {
//     id: "description",
//     numeric: true,
//     disablePadding: false,
//     label: "Description",
//   },
//   {
//     id: "vendors",
//     numeric: true,
//     disablePadding: false,
//     label: "Vendors",
//   },
// ];

function EnhancedTableHead(props) {
  // const {
  //   onSelectAllClick,
  //   order,
  //   orderBy,
  //   numSelected,
  //   rowCount,
  //   onRequestSort,
  // } = props;
  // const createSortHandler = (property) => (event) => {
  //   onRequestSort(event, property);
  // };

  return (
    <TableHead
      style={{
        backgroundColor: "black",
        // color:'white'
      }}
    >
      <TableRow
        style={{
          fontSize: "10px",
        }}
      >
        <TableCell padding="checkbox">
          {/* <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          /> */}
        </TableCell>
        <TableCell
          align="left"
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          #ID
        </TableCell>
        <TableCell
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
          align="center"
        >
          Category
        </TableCell>
        <TableCell
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
          align="center"
        >
          Sub-Category
        </TableCell>
        <TableCell
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Quantity
        </TableCell>
        <TableCell
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
        >
           <div  className="ml-[10px]" >Status  </div> 
        </TableCell>
        <TableCell
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
          align="left"
        >
          Release Date
        </TableCell>
        <TableCell
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Closer Date
        </TableCell>
        <TableCell
          align="center"
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Description
        </TableCell>
        <TableCell
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Vendors
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const [isAddRfp,setIsAddRfp] = React.useState(false)
  let dispatch = useDispatch();
  const isPopUp = useSelector((state)=>{
    return state["popup"]
  })

  let {createPopup} = isPopUp

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const addRfp = ()=>{
      // setIsAddRfp(true)
      dispatch(setAddCreatRfpPopUp())

    }

  return (
    <Box sx={{ width: "100%" }} component="div">
      <Box sx={{ display: "flex",width:'100%' }} component="div">
        <Typography
          style={{
            padding: "20px 0px 20px 0px",
            fontWeight: "bold",
          }}
        >
          RFP Dashboard
        </Typography>
        
        <Box component="div" sx={{
            position:'absolute',
            right:'15px',
            padding: "20px 0px 20px 0px",
            float:'right'
        }}>
           <Button
          size="large"
          aria-label="show 4 new mails"
        //   color="inherit"
          style={{
            backgroundColor: "#d04a02",
            height: "30px",
            marginRight: "10px",
            // borderRadius:'20px',
            fontSize: "15px",
            color:'white'
            // 
          }}
        >
         PRINT
        </Button>
           <Button
          size="large"
          aria-label="show 4 new mails"
        //   color="inherit"
          style={{
            backgroundColor: "#d04a02",
            height: "30px",
            marginRight: "10px",
            // borderRadius:'20px',
            fontSize: "15px",
            color:'white'
            // 
          }}
        >
         DOWNLOAD
        </Button>
        <Button
          size="large"
          aria-label="show 4 new mails"
        //   color="inherit"
          style={{
            backgroundColor: "#d04a02",
            height: "30px",
            marginRight: "10px",
            // borderRadius:'20px',
            fontSize: "15px",
            color:'white'
            // 
          }}
          onClick={addRfp}
        >
         Create RFP
        </Button>
        </Box>
      </Box>
     

      <Paper sx={{ width: "100%", mb: 2 }}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align="center"
                      >
                        {row.id}
                      </TableCell>
                      <TableCell align="center">{row.category}</TableCell>
                      <TableCell align="center">{row.subcat}</TableCell>
                      <TableCell align="center">  <div  className="w-[30px]" > {row.quantity}  </div> </TableCell>
                      <TableCell align="center">  <div  className="mr-[15px]" >   {row.status}   </div></TableCell>
                      <TableCell align="right">{row.releasedate}</TableCell>
                      <TableCell align="left">{row.closerdate}</TableCell>
                      <TableCell align="center">{row.description}</TableCell>
                      <TableCell align="center" sx={{cursor:'pointer'}}  onClick={() => console.log(index)} >{row.vendors}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25,50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {createPopup && (
        <CreateRfpPopUp />
      )

      }
    </Box>

     
  );
}
