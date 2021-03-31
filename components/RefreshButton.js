import React from "react"
import Button from "@material-ui/core/Button"
import RefreshIcon from "@material-ui/icons/Refresh"
import Grid from "@material-ui/core/grid"

const refreshButton = ({ clickHandler }) => {
  const style = {
    borderColor: "gray",
    color: "gray",
  }

  return (
    <Grid item>
      <Button
        style={style}
        onClick={clickHandler}
        className="refresh-button"
        startIcon={<RefreshIcon />}
        variant="outlined"
        size="large"
      >
        {"New Board"}
      </Button>
    </Grid>
  )
}

export default refreshButton
