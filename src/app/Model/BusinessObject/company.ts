export class Company {
    // Database information pt1
    pk: String;
    sk: String;

    // Custom URL
    identifier: String;

    // Company information
    name: String;
    internal_name: String;
    short_description: String;
    description: String;
    service_type: String;
    phone: String;
    foundation_date: String;
    registered_number: String;

    // Company address
    address: {
        country: String;
        city: String;
        street: String;
        lon: String;
        state: String;
        lat: String;
        zip_code: String
    };
    // Company delivery information
    delivery_info: {
        min_delivery: String,
        max_delivery: String,
        delivery_tax: String
    };
    
    // System visualization
    logo: String;
    logo_bg: String;

    // Database information pt2
    created_at: String;
    updated_at: String;

    constructor(options: {
        pk?: string;
        sk?: string;
        updated_at?: string;
        name?: string;
        internal_name?: String;
        created_at?: string;
        registered_number?: string;
        foundation_date?: string;
        address?: {
            country?: String;
            city?: String;
            street?: String;
            lon?: String;
            state?: String;
            lat?: String;
            zip_code?: String
        };
        delivery_info?: {
            min_delivery?: String,
            max_delivery?: String,
            delivery_tax?: String
        };
        short_description?: string;
        description?: string;
        logo?: string;
        logo_bg?: string;
        phone?: string;
        service_type?: string;
        identifier?: string;
        gender?: string;
    } = {}) {
        // Initialize Model
        this.pk = options.pk || '';
        this.sk = options.sk || '';
        this.name = options.name || '';
        this.internal_name = options.internal_name || '';
        this.address = {
            country: options.address?.country || '',
            city: options.address?.city || '',
            street: options.address?.street || '',
            lon: options.address?.lon || '',
            state: options.address?.state || '',
            lat: options.address?.lat || '',
            zip_code: options.address?.zip_code || ''
        };
        this.delivery_info = {
            min_delivery: options.delivery_info?.min_delivery || '',
            max_delivery: options.delivery_info?.max_delivery || '',
            delivery_tax: options.delivery_info?.delivery_tax || ''
        };
        this.foundation_date = options.foundation_date || '';
        this.registered_number = options.registered_number || '';
        this.short_description = options.short_description || '';
        this.description = options.description || '';
        this.service_type = options.service_type || '';
        this.identifier = options.identifier || '';
        this.logo = options.logo || '';
        this.name = options.name || '';
        this.phone = options.phone || '';
        this.logo_bg = options.logo_bg || '';
        this.created_at = options.created_at || '';
        this.updated_at = options.updated_at || '';
    }

}
