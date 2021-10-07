export class Pagination<Model extends Record<string, any>> {

    page = 1;
    filter: Model = {} as Model;

    previousPage(): Pagination<Model> {
        this.page--;
        return this;
    }

    nextPage(): Pagination<Model> {
        this.page++;
        return this;
    }

    reset(): void {
        this.page = 1;
        this.filter = {} as Model;
    }

    addFilter<K extends keyof Model>(key: K, value: any): void {
        this.filter[key] = value;
    }

    getGraphQLParams(): { page: number; filter: Model; } {
        return {
            page: this.page,
            filter: this.filter,
        }
    }
}