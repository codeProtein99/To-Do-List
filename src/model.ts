//We are going to export it from here:
export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}

//This type is going to be used by the new task that gets added up somewhere else in our App:
//Maybe a state od props etc etc