<section class="categories">
    <?php $categories = get_categories(array(
        'orderby' => 'name',
        'order'   => 'ASC'
    )); ?>
    <ul class="categories-container">
        <li><button id="all" class="btn current">Tous les articles</button></li>
        <?php foreach ($categories as $category) : ?>
            <li>
                <button id="<?= $category->slug ?>" class="btn"><?= $category->name ?></button>
            </li>
        <?php endforeach; ?>
    </ul>
</section>