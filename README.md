# Run Frontend
### 1. Go to frontend folder
cd frontend
### 2. Start the project
`npm start`

# Run Backend
### 1. Go to backend folder
`cd backend` 
### 2. Start the Project (On a different terminal)
`npm start`

# Tasks

### 1. For the backend, create a handler that gets some pokemos data from https://pokeapi.co/api/v2/pokemon?limit={data}&offset={data}
### 2. For each pokemon, make another request to the URL provided in the response from step 1.
### 3. Return a response to frontend, with an array of pokemons with the following data: (check [this](#append-1) for response details)
    - id (number)
    - name (string)
    - height (number)
    - weight (number)
    - hp (number)
    - attack (number)
    - defense (number)
    - speed (number)
    - type (comma joined string)
### 4. Connect the MainPage component with the SearchBar so you can send data to backend
### 5. In frontend, make a component that maps the backend response to a Pokemon Card. And show construct one card for each element received


## Append 1
### Poke Api responses

#### GET /pokemon
    {
        count: number,
        next: string,
        previous: string,
        results: Array<pokemons>
    }

#### pokemons
    {
        name: string,
        url: string
    }

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
        location_area_encounters: string(url),
        moves: Array,
        name: string,
        order: number,
        past_types: Array,
        species: Array,
        sprites: Array,
        stats: Array<stat>(check stat down below),
        types: Array<type>(check type down below),
        weight: number,
    }

#### type
    {
        slot: number,
        type: {
            name: string,
            url: string
        }
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
