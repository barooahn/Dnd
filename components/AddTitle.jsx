import TextField from "@mui/material/TextField";

export default function AddTitle({ setTitle, title }) {
  const handleTextUpdate = (e) => {
    setTitle(e.target.value);
  };

  return (
    <TextField
      required
      id="outlined-required"
      value={title}
      label="Required"
      // defaultValue="Enter Title"
      onChange={handleTextUpdate}
    />
  );
}
