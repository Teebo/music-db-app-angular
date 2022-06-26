export function normalizeValue(value: string): string {
	if (value) {
		return value.toLowerCase().replace(/\s/g, '');
	}

  return '';
}
