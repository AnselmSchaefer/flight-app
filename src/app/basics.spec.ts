const add = (a: number, b: number) => a + b;

describe('Add', () => {

    // vor jedem Testfall ausfuehren
    beforeEach(() => {
        console.log('Vorbereitungsaufgaben ...');
    })

    it('correctly adds 1 and 2', () => {
        // Arrange
        const a = 1;
        const b = 2;

        // Act
        const c = add(a, b);

        // Assert
        expect(c).toBe(3);
    })
})