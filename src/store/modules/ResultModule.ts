import { Module, Mutation, VuexModule } from "vuex-module-decorators";
import { Contact } from "@/clients/types/Contact";

@Module({
  namespaced: true,
})
export default class LoanModule extends VuexModule {
  private lists: Array<Contact> = [];

  get getList(): Array<Contact> {
    return this.lists;
  }

  @Mutation
  addList(value: Contact): void {
    this.lists.push(value);
  }
}
