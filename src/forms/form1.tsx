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

export default function Form1() {
  const [name, setName] = useState("Гиго Мария Ивановна");
  const [sex, setSex] = useState(0);
  const [weight, setWeight] = useState(90);
  const [height, setHeight] = useState(180);
  const [cigs, setCigs] = useState(1);
  const [alco, setAlco] = useState(300);
  const [breastPain, setBreastPain] = useState(0);
  const [headPain, setHeadPain] = useState(0);
  const [status, setStatus] = useState("");

  function getStatus() {
    const optimalWeight = Math.max(
      Math.min(Math.ceil((weight - (height - 100)) / 10), 10),
      0,
    );
    const optimalCigs = Math.min(Math.floor(cigs * 2), 5);
    const optimalAlco = Math.min(Math.floor(alco / 100), 5);

    const posibility = Math.ceil(
      ((sex * 3 +
        optimalWeight +
        optimalCigs +
        optimalAlco +
        breastPain * 5 +
        headPain * 5) /
        33) *
        100,
    );

    const posibilityText =
      posibility < 34
        ? "Низкая вероятность"
        : posibility < 66
          ? "Средняя вероятность"
          : "Высокая вероятность";

    return posibilityText.concat(", ", String(posibility), "%");
  }

  return (
    <Box
      component={"form"}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        width: "50vw",
        border: "1px solid black",
        padding: "30px",
        borderRadius: "10px",
      }}
    >
      <FormControl fullWidth>
        <TextField
          label={"Фамилия Имя Отчество"}
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
        />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Пол</InputLabel>
        <Select
          value={sex}
          label="Пол"
          onChange={(event) => {
            setSex(Number(event.target.value));
          }}
        >
          <MenuItem value={0}>Женский</MenuItem>
          <MenuItem value={1}>Мужской</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <TextField
          label={"Вес, кг"}
          onChange={(event) => {
            setWeight(Number(event.target.value) || 0);
          }}
          value={weight}
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          label={"Рост, см"}
          onChange={(event) => {
            setHeight(Number(event.target.value) || 0);
          }}
          value={height}
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          label={"Пачек сигарет в день"}
          onChange={(event) => {
            setCigs(Number(event.target.value) || 0);
          }}
          value={cigs}
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          label={"Алкоголь, грамм в день"}
          onChange={(event) => {
            setAlco(Number(event.target.value) || 0);
          }}
          value={alco}
        />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Боли в левой половине груди</InputLabel>
        <Select
          value={breastPain}
          label="Боли в левой половине груди"
          onChange={(event) => {
            setBreastPain(Number(event.target.value));
          }}
        >
          <MenuItem value={0}>Нет</MenuItem>
          <MenuItem value={1}>Да</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Боли в затылочной части</InputLabel>
        <Select
          value={headPain}
          label="Боли в затылочной части"
          onChange={(event) => {
            setHeadPain(Number(event.target.value));
          }}
        >
          <MenuItem value={0}>Нет</MenuItem>
          <MenuItem value={1}>Да</MenuItem>
        </Select>
      </FormControl>

      <Chip label={status} />

      <Button
        onClick={() => {
          setStatus(getStatus());
        }}
      >
        Дать оценку состоянию
      </Button>
    </Box>
  );
}
