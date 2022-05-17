# Run Frontend
### 1. Go to frontend folder
cd frontend
### 2. Install dependencies
`npm i`
### 3. Start the project
`npm start`

<br>
<br>

# Run Backend
### 1. Go to backend folder
`cd backend` 
### 2. Install dependencies
`npm i`
### 3. Start the Project (On a different terminal)
`npm start`

<br>
<br>

# Tasks

### 1. For the backend, create a handler that gets some pokemos data from https://pokeapi.co/api/v2/pokemon/{id or name}
### 2. For each pokemon, return a response to frontend, with an pokemon mapped to the following data: (check [this](#append-1) for pokemon response details)
    - id (number)
    - name (string)
    - height (number)
    - weight (number)
    - hp (number)
    - attack (number)
    - defense (number)
    - speed (number)
### 3. Connect the MainPage component with the SearchBar component so you have linked data between them (you can check what props does the SearchBar component needs in the SearchBar.types.ts file)
### 4. In frontend, make a component that maps the backend response to a Pokemon Card. And show construct one card for each element received
### 5. At the first load of the page, load the card for Pikachu https://pokeapi.co/api/v2/pokemon/pikachu in frontend

<br>
<br>

## Append 1
### Poke Api responses
#### GET /pokemon/{id}
    {
        abilities: Array,
        base_experience: number,
        forms: Array,
        game_indices: Array,
        height: number,
        held_items: Array,
        id: number,
        is_default: boolean,
        location_area_encounters: string,
        moves: Array,
        name: string,
        order: number,
        past_types: Array,
        species: Array,
        sprites: Array,
        stats: Array<stat>(check stat down below),
        types: Array<type>,
        weight: number,
    }

#### stat
    {
        base_stat: number,
        effort: number,
        stat: {
            name: string,
            url: string
        }
    }
