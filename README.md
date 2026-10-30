# Sister Margaret's Diary — Part 1

A Halloween puzzle about finite automata. Each room of the monastery is a state,
and the doors **0** and **1** are the transitions. Students explore the rooms,
draw the map, and then type a binary code in the **Margaret's code** window
(it appears in every room).

Open `index.html` in a browser to play. The whole game is that one page;
the `img/` and `font/` folders must stay next to it.

## How the code window works

Margaret's soul starts **where her body lies** (her laboratory) and follows the
code one digit at a time. Only the room where the code **ends** matters:

| Code ends in…            | Result                                   |
|--------------------------|------------------------------------------|
| Church                   | **You won** (her soul reaches a sacred place) |
| Father Ignatius' Office  | **You lost** (the trap: Margaret gets her revenge) |
| Any other room           | "Her soul stopped in …" and they can try again |

## Answer key (teacher only)

| Room                    | Door 0           | Door 1            |
|-------------------------|------------------|-------------------|
| The Hall (start)        | Library          | Sister Lucy's Room |
| Library                 | Margaret's Room  | Laboratory        |
| Laboratory              | Library          | Laboratory        |
| Margaret's Room         | Church Basement  | Sister Lucy's Room |
| Sister Lucy's Room      | Lucy's Closet    | The Hall          |
| Lucy's Closet           | Sister Lucy's Room | Lucy's Closet   |
| Church Basement         | Margaret's Room  | Church            |
| Church                  | Church Basement  | Father's Room     |
| Father's Room           | Church           | Father's Office   |
| Father's Office         | Father's Office  | Father's Room     |

- Shortest winning code: **0001** (Lab → Library → Margaret's Room → Basement → Church)
- Shortest trap code: **000111** (the same path, then on to the father's office)
- Other winning codes exist, e.g. `10001` and `000101`. Every code that *ends*
  in the Church is accepted, which is a good way to introduce the idea that an
  automaton accepts a whole *language* of strings, not one password.
- `00011` is a nice discussion case: it passes through the Church but does not end there.

## Changing the puzzle

At the top of the `<script>` in `index.html`:

```js
const SOUL_STARTS_IN = 'lab';             // where the code starts
const WIN_ROOM       = 'church';          // ending here wins
const TRAP_ROOM      = 'ignatius_office'; // ending here loses
const SHOW_TRACE     = true;              // false = hide the rooms the soul walks through
const TYPE_SPEED     = 40;                // typewriter speed (ms per letter)
```

Room texts, pictures and doors are in the `ROOMS` list just below, and the
win/lose texts are in `ENDINGS`.
