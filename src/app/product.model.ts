export class ProductModel {
    constructor (
        public name: string,
        public price: number,
        public disc: number,
        public url: string,
        public spec: Array<string>,
        public desc: string,
        public open: boolean
    ) {}
}