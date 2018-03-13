import { Action } from '@ngrx/store';
import { Exercise } from './exercise.model';

export const SET_AVAILABLE_EXERCISES = '[Training] Set Available Exercises';
export const SET_COMPLETED_EXERCISES = '[Training] Set Completed Exercises';
export const START_TRAINING = '[Training] Start Training';
export const STOP_TRAINING = '[Training] Stop Training';

export class SetAvailableExercises implements Action {
    readonly type = SET_AVAILABLE_EXERCISES;
    constructor(public payload: Exercise[]) {}
}

export class SetCompletedExercises implements Action {
    readonly type = SET_COMPLETED_EXERCISES;
    constructor(public payload: Exercise[]) {}
}

export class StartTraining implements Action {
    readonly type = START_TRAINING;
    constructor(public payload: string) {}
}

export class StopTraining implements Action {
    readonly type = STOP_TRAINING;
}

export type TrainingActions = SetAvailableExercises | SetCompletedExercises | StartTraining | StopTraining;
