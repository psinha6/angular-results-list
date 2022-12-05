import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import * as mockDataProducts from '../../../assets/MOCK_DATA.json';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const products = (mockDataProducts as any).default;
        return { products };
    }
}
