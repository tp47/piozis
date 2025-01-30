import {
  Box,
  Button,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

export default function Form2() {
  const [hiringPrinciple, setHiringPrinciple] = useState("d");
  const [colorPreference, setColorPreference] = useState("d");
  const [carPreference, setCarPreference] = useState("m");
  const [officeDecoration, setOfficeDecoration] = useState("m");
  const [clothingPreference, setClothingPreference] = useState("n");
  const [qualities, setQualities] = useState("n");
  const [futurePlans, setFuturePlans] = useState("d");
  const [friendshipValue, setFriendshipValue] = useState("n");
  const [relaxationAbility, setRelaxationAbility] = useState("n");
  const [selfAssessment, setSelfAssessment] = useState("m");
  const [st, setSt] = useState("");

  function getStatus() {
    const variables = [
      hiringPrinciple,
      colorPreference,
      carPreference,
      officeDecoration,
      clothingPreference,
      qualities,
      futurePlans,
      friendshipValue,
      relaxationAbility,
      selfAssessment,
    ];

    const dealerChance = variables.filter((letter) => letter === "d").length;
    const managerChance = variables.filter((letter) => letter === "m").length;
    const ceoChance = variables.filter((letter) => letter === "n").length;

    return `Делопроизводитель - ${dealerChance * 10}%, Менеджер - ${managerChance * 10}%, Начальник - ${ceoChance * 10}%,`;
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
      <FormControl>
        <FormLabel>По какому принципу вы бы набирали в фирму людей?</FormLabel>
        <RadioGroup
          defaultValue="d"
          onChange={(event) => {
            setHiringPrinciple(event.target.value);
          }}
          value={hiringPrinciple}
        >
          <FormControlLabel
            value="d"
            control={<Radio />}
            label="По деловым качествам"
          />
          <FormControlLabel
            value="n"
            control={<Radio />}
            label="Брал бы друзей и родных"
          />
          <FormControlLabel
            value="m"
            control={<Radio />}
            label="Доверился интуиции"
          />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Какой цвет больше нравится?</FormLabel>
        <RadioGroup
          defaultValue="d"
          onChange={(event) => {
            setColorPreference(event.target.value);
          }}
          value={colorPreference}
        >
          <FormControlLabel value="d" control={<Radio />} label="Зеленый" />
          <FormControlLabel value="n" control={<Radio />} label="Красный" />
          <FormControlLabel value="m" control={<Radio />} label="Синий" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Какую машину вы предпочитаете?</FormLabel>
        <RadioGroup
          defaultValue="m"
          onChange={(event) => {
            setCarPreference(event.target.value);
          }}
          value={carPreference}
        >
          <FormControlLabel value="m" control={<Radio />} label="Спортивную" />
          <FormControlLabel
            value="n"
            control={<Radio />}
            label="Представительскую"
          />
          <FormControlLabel value="d" control={<Radio />} label="Хэтчбек" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>При оформлении кабинета вы предпочтете?</FormLabel>
        <RadioGroup
          defaultValue="m"
          onChange={(event) => {
            setOfficeDecoration(event.target.value);
          }}
          value={officeDecoration}
        >
          <FormControlLabel
            value="m"
            control={<Radio />}
            label="Завесить все картинами"
          />
          <FormControlLabel
            value="d"
            control={<Radio />}
            label="Спокойные тона"
          />
          <FormControlLabel
            value="n"
            control={<Radio />}
            label="Официальную обстановку"
          />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>
          Деловые люди, как правило, не видят в одежде цель жизни, а для вас
          она...?
        </FormLabel>
        <RadioGroup
          defaultValue="n"
          onChange={(event) => {
            setClothingPreference(event.target.value);
          }}
          value={clothingPreference}
        >
          <FormControlLabel
            value="n"
            control={<Radio />}
            label="Для меня одежда - это очень многое. Без фирменных тряпок я мало что из себя представляю"
          />
          <FormControlLabel
            value="m"
            control={<Radio />}
            label="Я люблю красиво одеваться, так как это приятно и мне, и окружающим"
          />
          <FormControlLabel
            value="d"
            control={<Radio />}
            label="Хорошая одежда нужна мне для работы. Если я буду плохо одет, люди не будут со мной иметь дела"
          />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Какое из двух достоинств цените больше всего?</FormLabel>
        <RadioGroup
          defaultValue="n"
          onChange={(event) => {
            setQualities(event.target.value);
          }}
          value={qualities}
        >
          <FormControlLabel value="n" control={<Radio />} label="Авторитет" />
          <FormControlLabel
            value="d"
            control={<Radio />}
            label="Трудоспособность"
          />
          <FormControlLabel
            value="m"
            control={<Radio />}
            label="Общительность"
          />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>
          Я знаю, чего хочу и как этого можно добиться в ближайшие два-три года?
        </FormLabel>
        <RadioGroup
          defaultValue="d"
          onChange={(event) => {
            setFuturePlans(event.target.value);
          }}
          value={futurePlans}
        >
          <FormControlLabel
            value="d"
            control={<Radio />}
            label="Мои планы и желания часто меняются"
          />
          <FormControlLabel
            value="m"
            control={<Radio />}
            label="Мои планы и желания вряд ли кардинально изменятся"
          />
          <FormControlLabel
            value="n"
            control={<Radio />}
            label="Я точно знаю, чего хочу и как этого достичь"
          />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Дружба для вас:</FormLabel>
        <RadioGroup
          defaultValue="n"
          onChange={(event) => {
            setFriendshipValue(event.target.value);
          }}
          value={friendshipValue}
        >
          <FormControlLabel
            value="n"
            control={<Radio />}
            label="Сотрудничество"
          />
          <FormControlLabel value="d" control={<Radio />} label="Поддержка" />
          <FormControlLabel value="m" control={<Radio />} label="Альтруизм" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>
          Умеете ли вы отдыхать, отключаться от своих дел и многочисленных
          проблем?
        </FormLabel>
        <RadioGroup
          defaultValue="n"
          onChange={(event) => {
            setRelaxationAbility(event.target.value);
          }}
          value={relaxationAbility}
        >
          <FormControlLabel
            value="n"
            control={<Radio />}
            label="Могу, но не всегда. Если у меня что-то важное, я просто не могу не думать об этом. Тогда и отдых не в радость"
          />
          <FormControlLabel
            value="m"
            control={<Radio />}
            label="Когда я отдыхаю, я с радостью сваливаю с себя бремя забот и наслаждаюсь жизнью"
          />
          <FormControlLabel
            value="d"
            control={<Radio />}
            label="Я уже не помню, когда отдыхал последний раз. Все дела и дела"
          />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Мне кажется, что при оценке себя:</FormLabel>
        <RadioGroup
          defaultValue="m"
          onChange={(event) => {
            setSelfAssessment(event.target.value);
          }}
          value={selfAssessment}
        >
          <FormControlLabel
            value="m"
            control={<Radio />}
            label="Я чаще всего недооцениваю свои способности"
          />
          <FormControlLabel
            value="n"
            control={<Radio />}
            label="Я чаще всего переоцениваю свои способности"
          />
          <FormControlLabel
            value="d"
            control={<Radio />}
            label="Я оцениваю свои способности достаточно правильно и объективно"
          />
        </RadioGroup>
      </FormControl>

      <Chip label={st || ""} />

      <Button
        onClick={() => {
          setSt(getStatus());
        }}
      >
        Рассчитать
      </Button>
    </Box>
  );
}
