export type Message = {
    id: number;
    to: string;
    body: string;
    status: string;
    type: string;
    metadata?: {
        caption: string
    }
    sent_at: number
}