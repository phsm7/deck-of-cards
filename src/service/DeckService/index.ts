import api from "service/api";

const DeckService = {
    new: async () => await api.get('/new/draw/?count=5'),
    drawCard: async (id: string) => await api.get(`/${id}/draw/?count=1`),
    shuffle: async (id: string) => await api.get(`/${id}/shuffle/`)
}

export { DeckService };