export class Customer {
    pk: String;
    sk: String;
    personal_number: String;
    birthdate: String;
    address: {
        country: String;
        city: String;
        street: String;
        lon: String;
        state: String;
        lat: String;
        zip_code: String
    };
    phone: String;
    gender: String;
    created_at: String;
    updated_at: String;

    constructor(options: {
        pk?: string;
        sk?: string;
        updated_at?: string;
        personal_number?: string;
        created_at?: string;
        birthdate?: string;
        address?: {
            country?: String;
            city?: String;
            street?: String;
            lon?: String;
            state?: String;
            lat?: String;
            zip_code?: String
        };
        phone?: string;
        gender?: string;
    } = {}) {
        // Initialize Model
        this.pk = options.pk || '';
        this.sk = options.sk || '';
        this.updated_at = options.updated_at || '';
        this.personal_number = options.personal_number || '';
        this.created_at = options.created_at || '';
        this.birthdate = options.birthdate || '';
        this.address = {
            country: options.address?.country || '',
            city: options.address?.city || '',
            street: options.address?.street || '',
            lon: options.address?.lon || '',
            state: options.address?.state || '',
            lat: options.address?.lat || '',
            zip_code: options.address?.zip_code || ''
        };
        this.phone = options.phone || '';
        this.gender = options.gender || '';
    }
}
