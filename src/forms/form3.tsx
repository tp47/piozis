import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function Form3() {
  const [degree, setDegree] = useState(0);
  const [discovery, setDiscovery] = useState(0);
  const [experience, setExperience] = useState(0);
  const [grade, setGrade] = useState(0);
  const [status, setStatus] = useState("");

  function getStatus() {
    if (!degree) {
      return "Отказ";
    }

    if (!discovery && !experience && !grade) {
      return "Рассмотреть возможность приема";
    } else if (discovery) {
      return "Принять на позицию научного сотрудника";
    } else if (!experience && grade > 3.5) {
      return "Принять на позицию инженера-конструктора";
    } else if (grade < 3.5 && experience > 2) {
      return "Принять на позицию лаборанта";
    } else if (grade < 3.5 && experience <= 2) {
      return "Отказ";
    }

    return "Принять на позицию научного сотрудника";
  }

  return (
    <Box
      component={"form"}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        width: "80vw",
        border: "1px solid black",
        padding: "30px",
        borderRadius: "10px",
      }}
    >
      <FormControl fullWidth>
        <InputLabel>Образование</InputLabel>
        <Select
          value={degree}
          label="Образование"
          onChange={(event) => {
            setDegree(Number(event.target.value));
          }}
        >
          <MenuItem value={0}>Отсутствует</MenuItem>
          <MenuItem value={1}>Есть</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Научное открытие</InputLabel>
        <Select
          value={discovery}
          label="Научное открытие"
          onChange={(event) => {
            setDiscovery(Number(event.target.value));
          }}
        >
          <MenuItem value={0}>Отсутствует</MenuItem>
          <MenuItem value={1}>Есть</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <TextField
          label={"Стаж работы"}
          onChange={(event) => {
            setExperience(Number(event.target.value) || 0);
          }}
          value={experience}
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          label={"Средний балл оценок"}
          onChange={(event) => {
            setGrade(Number(event.target.value) || 0);
          }}
          value={grade}
        />
      </FormControl>

      <Chip label={status || ""} />

      <Button
        onClick={() => {
          setStatus(getStatus());
        }}
      >
        Определить позицию сотрудника
      </Button>
    </Box>
  );
}
