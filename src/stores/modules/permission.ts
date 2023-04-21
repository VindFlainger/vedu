import {defineStore} from "pinia";

export enum Privilege{
    Free,
    Extended,
    Advanced,
    AdvancedPlus
}

export enum Role{
    None ,
    Student,
    Instructor
}

interface PermissionStore {
    role: Role,
    privilege: Privilege
}

export const permissionStore = defineStore({
    id: 'permission',
    state: (): PermissionStore => ({
        role: 0,
        privilege: 0
    }),
    getters: {
        isStudent(): boolean {
            return this.role === Role.Student
        },
        isInstructor(): boolean {
            return this.role === Role.Instructor
        },
        isExtended(): boolean {
            return this.privilege === Privilege.Extended
        },
        isAdvanced(): boolean {
            return this.privilege === Privilege.Advanced
        },
        isAdvancedPlus(): boolean {
            return this.privilege === Privilege.AdvancedPlus
        }
    },
    actions: {

    }

})