import { describe, expect, it } from "vitest";
import { statusColor, priorityColor, shortNotes, filterGiftsByStatus} from  '@/utils/server'
import { Category, Color, Occasion, Priority, Status } from "@/constants";

const dummyData = [
    {
        id: 4,
        ownerEmail: 'some@example.com',
        status: Status.AVAILABLE,
        name: 'OstroVit Erytrytol 1 kg ERYTROL NATURALNY SŁODZIK',
        priority: Priority.HIGH,
        occasion: Occasion.NONE,
        category: Category.FOOD,
        notes: '',
        price: '1690',
        date: '01.01.2023',
        links: [],
      },
      {
        id: 5,
        ownerEmail: 'some@example.com',
        status: Status.AVAILABLE,
        name: 'OstroVit Erytrytol 1 kg ERYTROL NATURALNY SŁODZIK',
        priority: Priority.LOW,
        occasion: Occasion.NONE,
        category: Category.FOOD,
        notes: '',
        price: '1690',
        date: '01.01.2023',
        links: [],
      },
      {
        id: 6,
        ownerEmail: 'some@example.com',
        status: Status.RESERVED,
        name: 'OstroVit Erytrytol 1 kg ERYTROL NATURALNY SŁODZIK',
        priority: Priority.MEDIUM,
        occasion: Occasion.NONE,
        category: Category.FOOD,
        notes: '',
        price: '1690',
        date: '01.01.2023',
        links: [],
      },
]

describe('Utility functions for server and client side components', () => {
    it('should change tailwind text-color string to mach status', () => {
        const color = statusColor(Status.AVAILABLE)
        expect(color).toBe(Color.GREEN)
    });
    it('should change tailwind text-color string to mach priority', () => {
        const color = priorityColor(Priority.HIGH)
        expect(color).toBe(Color.RED)
    })
    it('should shorten the note to provided max chars', () => {
        const longNote = 'Hello, this is a note that is too long';
        const maxChars = 20;
        const shortNote = shortNotes(longNote, maxChars);
        expect(shortNote.length).toBe(maxChars)
    })
    it('should filter gifts by given status', () => {
        const filteredAvailable = filterGiftsByStatus(dummyData, Status.AVAILABLE);
        expect(filteredAvailable.length).toBe(2)

        const filteredReserved = filterGiftsByStatus(dummyData, Status.RESERVED);
        expect(filteredReserved.length).toBe(1)

        const filteredBought = filterGiftsByStatus(dummyData, Status.BOUGHT);
        expect(filteredBought.length).toBe(0)
    })
})