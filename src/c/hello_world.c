#include <stdio.h>
#include <stdlib.h>

typedef struct {
	struct {
		int a;
		int b;
	} nested;
} my_struct_t;

int main(void) {
	printf("Hello world!\n");

	my_struct_t const my_struct = {
		.nested = {
			.a = 1,
			.b = 2,
		},
	};

	return EXIT_SUCCESS;
}
