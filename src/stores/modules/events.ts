import {defineStore} from "pinia";

export enum AlertType {
    Success,
    Warn,
    Error
}

export enum AlertAttitude {
    Request,
    State
}

export interface Alert {
    title: string,
    message?: string,
    timeout: number,
    type: AlertType,
    attitude: AlertAttitude
}

interface StoredAlert extends Omit<Alert, 'timeout'> {
    id: number
}

export interface EventsState {
    alerts: StoredAlert[],
}

export const useEventsStore = defineStore('events', {
    state: (): EventsState => ({
        alerts: []
    }),
    actions: {
        addAlert(alert: Alert) {
            const id = Date.now()
            const storedAlert: StoredAlert = {...alert, id}
            this.alerts.push(storedAlert)
            setTimeout(() => {
                this.delAlert(id)
            }, alert.timeout)
        },
        delAlert(id: number) {
            this.alerts = this.alerts.filter(alert => alert.id !== id)
        }
    }
})