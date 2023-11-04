<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="font-vietnam bg-image min-h-screen p-4 md:px-8 lg:px-16">
	<!-- Nav Bar -->
	<header class="mb-6">
		<img alt="Contact Logo" src="/asset/contact-form-icon.svg" />
	</header>

	<!-- Main Content -->
	<main>
		<section>
			<div
				class="container mx-auto text-center text-white px-8 mb-8 md:px-[10rem] md:mb-12 lg:mb-16 xl:px-[25%]"
			>
				<p class="tracking-wide font-bold text-4xl mb-3 lg:text-6xl lg:mb-6">
					Interested in our business pricing?
				</p>
				<p class="font-medium md:px-[2rem] lg:text-2xl xl:px-[6rem]">
					Fill out the form to view details and we'll contact you as soon as possible.
				</p>
			</div>

			<div class="lg:px-32 xl:px-[28%]">
				<div class="bg-glass rounded-xl p-4 mb-16 md:mb-8">
					<form class="flex flex-col md:flex-row md:flex-wrap">
						<div class="text-xs mb-3 flex flex-col md:w-1/2 md:px-2 lg:mb-6">
							<label for="name" class="mb-1 text-white">Name</label>
							<input
								type="text"
								id="name"
								placeholder="Ethan Johnson"
								name="name"
								required
								class="rounded-lg p-3 md:p-4 xl:p-5 xl:text-[1rem] bg-whiteBackground"
							/>
						</div>

						<div class="text-xs mb-3 flex flex-col md:w-1/2 md:px-2 lg:mb-6">
							<label for="email" class="mb-1 text-white">Company Email</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="ethan@johnson.com"
								required
								class="rounded-lg p-3 md:p-4 xl:p-5 xl:text-[1rem] bg-whiteBackground"
							/>
						</div>

						<div class="text-xs mb-3 flex flex-col md:w-1/2 md:px-2 lg:mb-6">
							<label for="employees" class="mb-1 text-white">Company Size</label>
							<select
								name="employees"
								class="rounded-lg p-3 bg-whiteBackground xl:text-[1rem] font-bold md:p-4 xl:p-5"
							>
								<option value="2">50 - 100 employees</option>
								<option value="3">100+ employees</option>
							</select>
						</div>

						<div class="text-xs mb-3 flex flex-col md:w-1/2 md:px-2 lg:mb-6">
							<label for="subject" class="mb-1 text-white">Subject</label>
							<select
								name="subject"
								class="rounded-lg p-3 font-bold md:p-4 xl:p-5 xl:text-[1rem] bg-whiteBackground"
							>
								<option value="0">Building Landing pages</option>
							</select>
						</div>

						<div class="text-xs mb-5 flex flex-col md:w-full md:px-2 lg:mb-6">
							<label for="input5" class="mb-1 text-white">Message</label>
							<textarea
								rows="5"
								cols="33"
								id="input5"
								name="input5"
								placeholder="Input your Message here"
								class="resize-none p-3 rounded-lg h-[10rem] md:p-4 xl:text-[1rem] bg-whiteBackground xl:p-5 font-medium"
							/>
						</div>

						<div class="mb-16 flex flex-col md:w-full md:px-2 md:mb-8">
							<button
								type="submit"
								class="text-contactPurple font-bold text-xl bg-whiteBackground rounded-lg px-5 py-3 md:px-6 md:py-4 xl:px-8 xl:py-6 xl:text-xl"
								>Contact Sales</button
							>
						</div>
					</form>
				</div>
			</div>
		</section>
	</main>
</div>

<style>
	.bg-image {
		background-image: url('/asset/bg-image.svg');
		background-size: cover;
		background-position: center;
	}

	.bg-glass {
		background: rgba(255, 255, 255, 0.15);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(4.7px);
		-webkit-backdrop-filter: blur(4.7px);
	}
</style>
